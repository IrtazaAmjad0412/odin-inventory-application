import {
  getAllCategories,
  insertCategory,
  updateCategory,
  deleteCategoryById,
} from "../db/queries.js";

export const getAndShowCategoryList = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.render("categoryList", { title: "Category List", categories: categories });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const showCategoryForm = (req, res) => {
  try {
    res.render("categoryForm", { title: "New Category" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).send("Both name and description are required");
    }
    await insertCategory(name, description);
    res.redirect("/categories");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const showEditCategoryForm = async (req, res) => {
  try {
    const { id } = req.params;
    const categories = await getAllCategories();
    const category = categories.find((category) => category.id === Number(id));
    if (!category) {
      return res.status(404).send("Category not found");
    }
    res.render("editCategoryForm", { title: "Edit Category", category: category });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).send("All fields required");
    }
    await updateCategory(id, name, description);
    res.redirect("/categories");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCategoryById(id);
    res.redirect("/categories");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
