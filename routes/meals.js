import { Router } from 'express';

import { getMeal, listMeals, createMeal, updateMeal, deleteMeal } from '../controllers/meals.js'
import { isAuthenticated } from '../middlewares/auth-validation.js';

const router = Router();

router.route('/')
    .get(isAuthenticated, listMeals)
    .post(isAuthenticated, createMeal);

router.route('/:id')
    .get(isAuthenticated, getMeal)
    .put(isAuthenticated, updateMeal)
    .delete(isAuthenticated, deleteMeal);

export default router;