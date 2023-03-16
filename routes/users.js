import Router from 'express';

import { deleteUser, getSingleUser, getUsers, updateUser } from '../controllers/users.js';
import { isAuthenticated } from '../middlewares/auth-validation.js';
import { verifyAdmin } from '../middlewares/admin-verification.js';

const router = Router();

router.route('/')
    .get(isAuthenticated, getUsers)

router.route('/:id')
    .get(isAuthenticated, getSingleUser)
    .put(isAuthenticated, verifyAdmin, updateUser)
    .delete(isAuthenticated, verifyAdmin, deleteUser);

export default router;