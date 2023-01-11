import { Category } from '../models/Category.js';

export const getSingleCategory = async (req, res, next) => {

    const { id } = req.params;

    try {
        const category = await Category.findById(id);

        if (!category) {
            res.status(404).json({
                msg: 'Category not found'
            });
        }

        res.status(200).json(category);

    } catch (error) {
        next(error)
    }
};

export const listAllCategories = async (req, res, next) => {

    try {
        const categories = await Category.find().populate('meals', 'name');

        res.status(200).json(categories);

    } catch (error) {
        next(error);
    }
};

export const createCategory = async (req, res, next) => {

    const { name } = req.body;

    try {
        const category = new Category({
            name
        });

        await category.save();

        return res.status(201).json(category);

    } catch (error) {
        next(error)
    }
};

export const updateCategory = async (req, res, next) => {

    const { id } = req.params;
    const { ...data } = req.body;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true });

        if (!category) {
            res.status(404).json({
                msg: 'Category not found'
            });
        }

        res.status(200).json({
            msg: 'Category updated successfully',
            updatedCategory
        });

    } catch (error) {
        next(error)
    }
};

export const deleteCategory = async (req, res, next) => {

    const { id } = req.params;

    try {
        const category = await Category.findByIdAndDelete(id);

        if (!category) {
            res.status(404).json({
                msg: 'Category not found'
            });
        }

        res.status(200).json({
            msg: 'Category deleted successfully'
        });

    } catch (error) {
        next(error)
    }
};