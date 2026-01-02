import { pool } from "./pool.js";

export const getAllCategories = async () => {
  const { rows } = await pool.query(
    "SELECT id, name, description, created_at, updated_at FROM categories ORDER BY created_at ASC"
  );
  return rows;
};

export const insertCategory = async (name, description) => {
  const { rows } = await pool.query(
    "INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *",
    [name, description]
  );
  return rows[0];
};

export const updateCategory = async (id, name, description) => {
  const { rows } = await pool.query(
    "UPDATE categories SET name = $1, description = $2, updated_at=NOW() WHERE id = $3 RETURNING *",
    [name, description, id]
  );
  return rows[0];
};

export const deleteCategoryById = async (id) => {
  const { rows } = await pool.query("DELETE FROM categories WHERE id = $1 RETURNING *", [
    id,
  ]);
  return rows[0];
};

export const getItemsByCategoryId = async (categoryId) => {
  const { rows } = await pool.query(
    "SELECT id, name, calories, carbs, fats, proteins, category_id, created_at, updated_at FROM items WHERE category_id = $1 ORDER BY created_at ASC",
    [categoryId]
  );
  return rows;
};

export const getItemById = async (itemId) => {
  const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [itemId]);
  return rows[0];
};

export const insertItem = async (name, calories, carbs, fats, proteins, categoryId) => {
  const { rows } = await pool.query(
    "INSERT INTO items (name, calories, carbs, fats, proteins, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, calories, carbs, fats, proteins, categoryId]
  );
  return rows[0];
};

export const updateItem = async (
  name,
  calories,
  carbs,
  fats,
  proteins,
  categoryId,
  itemId
) => {
  const { rows } = await pool.query(
    "UPDATE items SET name = $1, calories = $2, carbs = $3, fats = $4, proteins = $5, category_id = $6, updated_at=NOW() WHERE id = $7 RETURNING *",
    [name, calories, carbs, fats, proteins, categoryId, itemId]
  );
  return rows[0];
};

export const deleteItemById = async (itemId) => {
  const { rows } = await pool.query("DELETE FROM items WHERE id = $1 RETURNING *", [
    itemId,
  ]);
  return rows[0];
};
