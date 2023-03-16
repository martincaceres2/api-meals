import { Router } from 'express';

import { getMeal, listMeals, createMeal, updateMeal, deleteMeal } from '../controllers/meals.js'
import { verifyAdmin } from '../middlewares/admin-verification.js'
import { isAuthenticated } from '../middlewares/auth-validation.js';

const router = Router();

router.route('/')
    .get(isAuthenticated, listMeals)
    .post(isAuthenticated, verifyAdmin, createMeal);

router.route('/:id')
    .get(isAuthenticated, getMeal)
    .put(isAuthenticated, verifyAdmin, updateMeal)
    .delete(isAuthenticated, verifyAdmin, deleteMeal);

export default router;