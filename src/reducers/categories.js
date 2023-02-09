import { GETALL_CATEGORIES } from "../actions/types";

const initialState = [];

function categoryReducer(categories = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETALL_CATEGORIES:
      return payload;

    default:
      return categories;
  }
}

export default categoryReducer;
