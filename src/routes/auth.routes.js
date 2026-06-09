import express from "express";
import { register } from "../controllers/userAuth.js";
import rateLimit from "express-rate-limit";
import { requestLimiter } from "../middlewares/requestLimiter.middleware.js";
import { registerSchema } from "../validations/auth.validation.js";
import { validate } from "../middlewares/validate.middleware.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  requestLimiter,
  validate(registerSchema),
  register,
);


export { authRouter };
