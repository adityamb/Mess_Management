import { SEARCH_PRODUCTS, SET_SEARCH_NULL } from "../actions/types";

const initialState = {
  products: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case SET_SEARCH_NULL:
      return {
        ...state,
        products: null
      };
    default:
      return state;
  }
}
