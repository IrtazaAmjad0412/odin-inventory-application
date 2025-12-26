import { getAllCategories } from "../db/queries.js";

export const getAndShowCategoryList = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.render("categoryList", { title: "Category List", categories: categories });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
