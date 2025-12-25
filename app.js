import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
app.listen(PORT, (err) => {
  console.log(err);
  if (err) {
    throw err;
  }
  console.log(`Express App launched successfully! Server running on port ${PORT}.`);
});
