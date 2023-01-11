import mongoose from "mongoose";

export const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 5
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user_role', 'admin_role'],
        default: 'user_role'
    }
});
