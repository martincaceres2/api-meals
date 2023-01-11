import mongoose from 'mongoose';

export const Meal = mongoose.model('Meal', {

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },

    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }]
});
