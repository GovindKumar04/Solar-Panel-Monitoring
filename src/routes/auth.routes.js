import express from "express";
import { login, register } from "../controllers/userAuth.js";
import rateLimit from "express-rate-limit";

import { loginSchema, registerSchema } from "../validations/auth.validation.js";
import { validate } from "../middlewares/validate.middleware.js";
import { locales } from "zod/v4/core";

const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), register);

authRouter.post("/login", validate(loginSchema), login);

export { authRouter };
