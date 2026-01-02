import {
  deleteItemById,
  getItemById,
  getItemsByCategoryId,
  insertItem,
  updateItem,
} from "../db/queries.js";

export const getAndShowItemListByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const items = await getItemsByCategoryId(id);
    res.render("itemList", { title: "Item List", items: items, categoryId: id });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const showItemForm = (req, res) => {
  try {
    const { id } = req.params;
    res.render("itemForm", { title: "New Item", categoryId: id });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const createItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, calories, carbs, fats, proteins } = req.body;
    if (
      !name ||
      [calories, carbs, fats, proteins].some(
        (number) => number === undefined || number === ""
      )
    ) {
      return res
        .status(400)
        .send("All fields (name, calories, carbs, fats, proteins) are required");
    }
    await insertItem(
      name,
      Number(calories),
      Number(carbs),
      Number(fats),
      Number(proteins),
      id
    );
    res.redirect(`/categories/${id}/items`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const showEditItemForm = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const item = await getItemById(itemId);
    res.render("editItemForm", { title: "Edit Item", item: item, categoryId: id });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const editItem = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const { name, calories, carbs, fats, proteins } = req.body;
    await updateItem(
      name,
      Number(calories),
      Number(carbs),
      Number(fats),
      Number(proteins),
      id,
      itemId
    );
    res.redirect(`/categories/${id}/items`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    await deleteItemById(itemId);
    res.redirect(`/categories/${id}/items`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
