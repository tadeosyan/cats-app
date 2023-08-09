import { Dispatch } from "redux";
import { Category } from "./types";
import axios from "axios";
import { actionTypes } from "./actionTypes";

export const useCatsActions = () => {
  const fetchCategories = () => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get<Category[]>(
          `${process.env.API_URL}/categories`
        );

        const categories = response.data;
        dispatch({ type: actionTypes.FETCH_CATEGORIES, payload: categories });
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  };

  const setCategoryId = (categoryId: number) => {
    return { type: actionTypes.SET_CATEGORY_ID, payload: categoryId };
  };

  const fetchCatImages = (categoryId: number) => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get(
          `${process.env.API_URL}/images/search?limit=10&page=1&category_ids=${categoryId}`
        );
        dispatch({
          type: actionTypes.FETCH_CAT_IMAGES,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };
  };

  const loadMoreImages = (categoryId: number, page: 0) => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get(
          `${process.env.API_URL}/images/search?limit=10&page=${
            page + 1
          }&category_ids=${categoryId}`
        );
        dispatch({
          type: actionTypes.LOAD_MORE_CAT_IMAGES,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching more cat images:", error);
      }
    };
  };

  return { fetchCategories, setCategoryId, fetchCatImages, loadMoreImages };
};
