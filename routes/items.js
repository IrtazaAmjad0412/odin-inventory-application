import express from "express";
import { getAndShowItemList } from "../controllers/itemsController.js";

const router = express.Router();

router.get("/", getAndShowItemList);

export default router;
