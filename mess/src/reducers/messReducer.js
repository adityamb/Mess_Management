import { SHOW_MESS_CUTS } from "../actions/types";

const initialState = {
    messcuts: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SHOW_MESS_CUTS:
        return {
          ...state,
          messcuts: action.payload
        };
     
      default:
        return state;
    }
  }
  