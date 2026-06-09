import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters"),

  email: z
    .email("Invalid email"),

  mobile_number: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),

  password_hash: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  role: z
    .enum(["user", "admin"])
    .default("user")
});
export const loginSchema = z.object({
  email: z
    .email("Invalid email"),
  password_hash: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});