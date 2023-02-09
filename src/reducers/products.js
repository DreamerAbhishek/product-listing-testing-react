import { GETALL_PRODUCTS } from "../actions/types";

const initialState = [];

function productReducer(products = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETALL_PRODUCTS:
      return payload;

    default:
      return products;
  }
}

export default productReducer;
