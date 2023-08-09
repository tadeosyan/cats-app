import { combineReducers } from "redux";
import { actionTypes } from "./actionTypes";
import { Cats, Action } from "./types";

const categoriesReducer = (state: Cats["categories"] = [], action: Action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

const catImagesReducer = (state: Cats["catImages"] = [], action: Action) => {
  switch (action.type) {
    case actionTypes.FETCH_CAT_IMAGES:
      return action.payload;
    case actionTypes.LOAD_MORE_CAT_IMAGES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const categoryIdReducer = (state: Cats["categoryId"] = 0, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY_ID:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  categories: categoriesReducer,
  catImages: catImagesReducer,
  categoryId: categoryIdReducer,
});
