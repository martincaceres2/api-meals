import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const isAuthenticated = async (req, res, next) => {

    const token = req.header('token');

    if (!token) {
        return res.status(401).json({
            msg: 'You must log in and insert a token'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id);

        next()

    } catch (error) {
        return res.status(401).json({
            msg: 'Invalid token'
        })
    }
};

