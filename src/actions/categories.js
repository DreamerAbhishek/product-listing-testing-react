import { GETALL_CATEGORIES } from "./types";
import CategoriesDataService from "../services/categoryService";

export const getAllCategories = () => async (dispatch) => {
  try {
    const res = await CategoriesDataService.getAll();

    dispatch({
      type: GETALL_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
