import express from "express";
import {
  getAndShowItemListByCategory,
  showItemForm,
  createItem,
  deleteItem,
  editItem,
  showEditItemForm,
} from "../controllers/itemsController.js";

const router = express.Router({ mergeParams: true });

router.get("/", getAndShowItemListByCategory);
router.get("/new", showItemForm);
router.post("/", createItem);
router.get("/:itemId/edit", showEditItemForm);
router.post("/:itemId/edit", editItem);
router.post("/:itemId/delete", deleteItem);

export default router;
