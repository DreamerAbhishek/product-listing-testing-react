import { GETALL_PRODUCTS } from "./types";
import ProductsDataService from "../services/productService";

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await ProductsDataService.getAll();

    dispatch({
      type: GETALL_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
