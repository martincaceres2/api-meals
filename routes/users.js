import Router from 'express';

import { deleteUser, getSingleUser, getUsers, updateUser } from '../controllers/users.js';
import { isAuthenticated } from '../middlewares/auth-validation.js';

const router = Router();

router.route('/')
    .get(isAuthenticated, getUsers)

router.route('/:id')
    .get(isAuthenticated, getSingleUser)
    .put(isAuthenticated, updateUser)
    .delete(isAuthenticated, deleteUser);

export default router;