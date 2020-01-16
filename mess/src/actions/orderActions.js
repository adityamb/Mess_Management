import axios from "axios";

// Post order
export const postOrder = order => dispatch => {
  axios
    .post("/api/orders", order)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
