import axios from "axios";
import { SHOW_MESS_CUTS} from "./types";


// Add messcut
// Add to cart
export const addMesscut = item => dispatch => {
    axios
      .post("http://localhost:7000/api/messcuts/add", item)
      .then(res => {
        console.log("success")

        console.log(res);
      })
      .catch(err => console.log(err));
  };

  // Disply Mess cuts
export const displyMesscuts = () => dispatch => {
    axios
      .get("http://localhost:7000/api/messcuts")
      .then(res => {
        dispatch({
          type: SHOW_MESS_CUTS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
  