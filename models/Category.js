import mongoose from 'mongoose';

export const Category = mongoose.model('Category', {
    name: {
        type: String,
        required: true
    },

    meals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meal'
    }]
});
