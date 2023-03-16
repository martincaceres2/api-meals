import { Router } from 'express';

import { getSingleCategory, listAllCategories, createCategory, updateCategory, deleteCategory } from '../controllers/categories.js';
import { verifyAdmin } from '../middlewares/admin-verification.js';
import { isAuthenticated } from '../middlewares/auth-validation.js';

const router = Router();

router.route('/')
    .get(isAuthenticated, listAllCategories)
    .post(isAuthenticated, verifyAdmin, createCategory);

router.route('/:id')
    .get(isAuthenticated, getSingleCategory)
    .put(isAuthenticated, verifyAdmin, updateCategory)
    .delete(isAuthenticated, verifyAdmin, deleteCategory);

export default router;