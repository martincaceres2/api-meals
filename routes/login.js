import Router from 'express';

import { validateFields } from '../middlewares/validation-result.js';

import { login } from '../auth/login.js';
import { loginValidator } from '../middlewares/body-validators.js';

const router = Router()

router.route('/')
    .post(loginValidator, validateFields, login);

export default router;