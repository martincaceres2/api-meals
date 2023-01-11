import { Category } from "../models/Category.js";
import { Meal } from "../models/Meal.js";

export const getMeal = async (req, res, next) => {

    const { id } = req.params;

    try {
        const meal = await Meal.findById(id).populate('category', 'name');

        if (!meal) {
            return res.status(400).json({
                msg: 'There is no meal with this id'
            });
        }

        res.status(200).json(meal);
    } catch (error) {
        next(error)
    }
};

export const listMeals = async (req, res, next) => {

    try {
        const meals = await Meal.find().populate('category', 'name');

        res.status(200).json(meals);

    } catch (error) {
        next(error);
    }
};

export const createMeal = async (req, res, next) => {

    const { name, description, category } = req.body;

    const categoryMeal = await Category.findById(category);

    if (!categoryMeal) {
        res.json({
            msg: 'The category id does not belong to any category'
        });
    }

    try {
        const meal = new Meal({
            name,
            description,
            category: categoryMeal
        });

        const savedMeal = await meal.save();
        categoryMeal.meals = categoryMeal.meals.concat(savedMeal._id);
        await categoryMeal.save();

        res.status(201).json({ msg: 'Meal created successfully', savedMeal });

    } catch (error) {
        console.log(error)
        next(error);
    }
};

export const updateMeal = async (req, res, next) => {

    const { id } = req.params;
    const { ...data } = req.body;

    try {
        const updatedMeal = await Meal.findByIdAndUpdate(id, data, { new: true });

        if (!meal) {
            res.status(404).json({
                msg: 'Meal not found'
            });
        }

        res.status(200).json({
            msg: 'Meal updated successfully',
            updatedMeal
        });

    } catch (error) {
        next(error)
    }
};

export const deleteMeal = async (req, res, next) => {

    const { id } = req.params;

    try {

        const meal = await Meal.findByIdAndDelete(id);

        if (!meal) {
            res.status(404).json({
                msg: 'Meal not found'
            });
        }

        res.status(200).json({
            msg: 'Meal deleted successfully'
        });

    } catch (error) {
        next(error)
    }
};