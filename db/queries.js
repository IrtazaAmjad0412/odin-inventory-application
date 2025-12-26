import { pool } from "./pool.js";

export const getAllCategories = async () => {
  const { rows } = await pool.query(
    "SELECT id, name, description, created_at, updated_at FROM categories ORDER BY created_at ASC"
  );
  return rows;
};
