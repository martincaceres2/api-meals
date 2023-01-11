import bcrypt from 'bcrypt';
import { User } from "../models/User.js";
import { generateToken } from '../helpers/jwt-generation.js';

export const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({
            email: email
        });

        if (!user) {
            res.json({
                msg: 'Wrong credentials'
            });
        }

        //Verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            res.send('Wrong credentials')
        }

        //If password is correct, generate JWT
        const token = generateToken(user);

        //Return a success message and the token
        res.json({ msg: 'Logged in successfully', token });

    } catch (error) {
        console.log(error);
    }
};