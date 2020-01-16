import { SELECT_PRODUCT, SET_PRODUCT_NULL } from "../actions/types";

const initialState = {
  product: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case SET_PRODUCT_NULL:
      return {
        ...state,
        product: null
      };

    default:
      return state;
  }
}
