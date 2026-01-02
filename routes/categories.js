import express from "express";
import itemRouter from "./items.js";
import {
  getAndShowCategoryList,
  showCategoryForm,
  createCategory,
  showEditCategoryForm,
  editCategory,
  deleteCategory,
} from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/", getAndShowCategoryList);
router.get("/new", showCategoryForm);
router.post("/", createCategory);
router.get("/:id/edit", showEditCategoryForm);
router.post("/:id/edit", editCategory);
router.post("/:id/delete", deleteCategory);

router.use("/:id/items", itemRouter);

export default router;
