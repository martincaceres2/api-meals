import bcrypt from 'bcrypt';
import { User } from '../models/User.js';

export const registerUser = async (req, res, next) => {

    const { email, password, role } = req.body;

    try {
        const emailExists = await User.findOne({ email: email });

        if (emailExists) {
            return res.status(403).json({
                msg: 'Email is already registered'
            });
        }

        //Password encryptation
        const hashed = await bcrypt.hash(password, 10);

        const data = await User.create({ email, password: hashed, role });

        res.json({ msg: 'User registered successfully', data });

    } catch (error) {
        console.log(error);
        next(error)
    }
};