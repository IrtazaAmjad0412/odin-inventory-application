import { getAllItems } from "../db/queries.js";

export const getAndShowItemList = async (req, res) => {
  try {
    const items = await getAllItems();
    res.render("itemList", { title: "Item List", items: items });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
