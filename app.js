import express from 'express';
import {authRouter} from './src/routes/auth.routes.js';
import { requestLimiter } from "./src/middlewares/requestLimiter.middleware.js";

const app= express();

app.use(express.json());
app.use(requestLimiter);
app.use("/api", authRouter);

export {app};