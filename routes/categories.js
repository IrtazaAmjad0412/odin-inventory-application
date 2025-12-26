import express from "express";
import { getAndShowCategoryList } from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/", getAndShowCategoryList);

export default router;
