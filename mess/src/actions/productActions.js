import axios from "axios";
import { SELECT_PRODUCT, SET_PRODUCT_NULL } from "./types";

// Select product by id
export const selectProduct = id => dispatch => {
  axios
    .get(`/api/products/pdt/${id}`)
    .then(res => {
      dispatch({
        type: SELECT_PRODUCT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Set product null
export const setProductNull = () => dispatch => {
  dispatch({
    type: SET_PRODUCT_NULL
  });
};
