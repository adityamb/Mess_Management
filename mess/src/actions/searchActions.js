import axios from "axios";
import { SEARCH_PRODUCTS, SET_SEARCH_NULL } from "./types";

// Set main search null
export const setSearchNull = () => dispatch => {
  dispatch({
    type: SET_SEARCH_NULL
  });
};

// Search function
export const searchProducts = query => dispatch => {
  axios
    .get(`/api/products/${query}`)
    .then(res => {
      dispatch({
        type: SEARCH_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
