import bcrypt from 'bcrypt';

import { User } from "../models/User.js"

export const getUsers = async (req, res) => {

    const users = await User.find();

    if (!users) {
        res.json({
            msg: 'There are no users in this database'
        });
    }

    res.json(users);
};

export const getSingleUser = async (req, res, next) => {

    try {

        const { id } = req.params

        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.json({ msg: 'There is no user with this id' })
        }

        res.json(user)

    } catch (error) {
        console.log(error)
        next();
    }
};


export const updateUser = async (req, res, next) => {

    const { id } = req.params;
    const { email, password } = req.body;

    try {
        // If the user is trying to update the password, we encrypt the new pw.
        if (password) {
            const salt = await bcrypt.genSalt();
            const hashed = await bcrypt.hash(password, salt);

            // Find an user in the db and then update its parameters.
            const user = await User.findByIdAndUpdate({ _id: id }, { email, password: hashed, salt });

            // If there is no user with the sent id, the server answers no id found.
            if (!user) {
                return res.json({ msg: 'There is no user with this id' });
            }
        }

        res.json({ msg: 'User updated successfully' });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {

    const { id } = req.params;

    try {
        // Find the user by its ID and delete id
        const user = await User.findByIdAndDelete(id);

        // If there is no user with this id, the request ends here with a message saying no user with this id
        if (!user) {
            return res.json('There is no user with this id')
        }

        return res.json({
            msg: 'User deleted successfully'
        });

    } catch (error) {
        console.log(error)
        next(error);
    }
}