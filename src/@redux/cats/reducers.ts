import { combineReducers } from "redux";
import { actionTypes } from "./actionTypes";

const categoriesReducer = (state: [], action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

const catImagesReducer = (state: [], action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_CAT_IMAGES:
      return action.payload;
    case actionTypes.LOAD_MORE_CAT_IMAGES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const categoryIdReducer = (state: 0, action: any) => {
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
