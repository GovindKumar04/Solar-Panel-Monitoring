import "dotenv/config";
import pool from "../config/db.js";
import { seedUserAuth } from "./user.js";

// Register every migration here, in the order it should run.
const migrations = [seedUserAuth];

const runMigrations = async () => {
  console.log("Running migrations...");
  try {
    for (const migration of migrations) {
      await migration();
    }
    console.log("All migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
};

runMigrations();
