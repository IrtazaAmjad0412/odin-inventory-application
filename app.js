import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import categoryRouter from "./routes/categories.js";
import { getAndShowCategoryList } from "./controllers/categoriesController.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", getAndShowCategoryList);
app.use("/categories", categoryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(`Express App launched successfully! Server running on port ${PORT}.`);
});
