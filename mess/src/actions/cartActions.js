import axios from "axios";
import { DISPLY_CART, CLEAR_CART } from "./types";

// Add to cart
export const addToCart = item => dispatch => {
  axios
    .post("/api/carts", item)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};

// Disply cart
export const displyCart = () => dispatch => {
  axios
    .get("/api/carts")
    .then(res => {
      dispatch({
        type: DISPLY_CART,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Clear cart
export const clearCart = () => dispatch => {
  axios.delete("/api/carts").then(res => {
    dispatch({
      type: CLEAR_CART
    });
  });
};
