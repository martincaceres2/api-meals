import { body } from "express-validator";

export const registerValidator = [
    body('email', 'Enter a valid email').isEmail().notEmpty().isLength({ min: 7 }),
    body('password', 'Enter a valid password').notEmpty().isLength({ min: 6 })
];

export const loginValidator = [
    body('email', 'Enter a valid email').isEmail().notEmpty().isLength({ min: 7 }),
    body('password', 'Enter a valid password').notEmpty().isLength({ min: 6 })
];

export const mealsBody = [
    body('name', 'Name is required').isString().trim().notEmpty().escape(),
    body('description', 'You must add a description').isString().trim().notEmpty().escape().isLength({ min: 5 }),
    body('category', 'Category is required').trim().notEmpty().escape().isLength({ min: 5 }),
    body('subCategory', 'Sub category is required').trim().notEmpty().escape().isLength({ min: 5 })
];

export const categoriesBody = [
    body('name', 'Name is required').isString().trim().notEmpty().escape(),
    body('subCategory', 'Sub category is required').trim().notEmpty().escape().isLength({ min: 5 })
];