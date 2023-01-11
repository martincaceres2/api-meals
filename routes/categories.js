import { Router } from 'express';

import { getSingleCategory, listAllCategories, createCategory, updateCategory, deleteCategory } from '../controllers/categories.js';
import { isAuthenticated } from '../middlewares/auth-validation.js';

const router = Router();

router.route('/')
    .get(isAuthenticated, listAllCategories)
    .post(isAuthenticated, createCategory);

router.route('/:id')
    .get(isAuthenticated, getSingleCategory)
    .put(isAuthenticated, updateCategory)
    .delete(isAuthenticated, deleteCategory);

export default router;