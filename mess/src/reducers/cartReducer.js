import { DISPLY_CART, CLEAR_CART } from "../actions/types";

const initialState = {
  cart: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISPLY_CART:
      return {
        ...state,
        cart: action.payload
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: null
      };
    default:
      return state;
  }
}
