import { Router } from "express";

import { registerUser } from "../auth/register.js";
import { registerValidator } from "../middlewares/body-validators.js";
import { validateFields } from "../middlewares/validation-result.js";

const router = Router();

router.route('/')
    .post(registerValidator, validateFields, registerUser);

export default router;