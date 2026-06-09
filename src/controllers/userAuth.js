import { asyncHandler } from "../utils/asyncHandler.js";
import pool from "../config/db.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";

export const register = asyncHandler(async (req, res) => {
  const { username, email, mobile_number, password_hash, role } = req.body;

  const existingUser = await pool.query(
    "SELECT email FROM users WHERE email = $1",
    [email]
  );

  if (existingUser.rows.length > 0) {
    throw new ApiError(409, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(password_hash, 10);

  const user = await pool.query(
    `INSERT INTO users
    (username, email, mobile_number, password_hash, role)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, username, email, mobile_number, role`,
    [username, email, mobile_number, hashedPassword, role]
  );

  return res.status(201).json(
    new ApiResponse(
      201,
      user.rows[0],
      "User created successfully"
    )
  );
});