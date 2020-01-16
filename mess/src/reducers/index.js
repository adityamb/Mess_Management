import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messReducer from "./messReducer";




export default combineReducers({
  auth: authReducer,
  mess:messReducer
 
});
