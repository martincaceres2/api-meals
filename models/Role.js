import mongoose from "mongoose";

export const Role = mongoose.model('Role', {

    role: {
        type: String,
        required: true
    }
});