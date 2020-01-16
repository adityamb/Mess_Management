import axios from 'axios';
import {GET_STATUS} from './types';

// Display Status
export const displayStatus=item=>dispatch=>{
    axios.get("/api/delivery")
        .then(res=>{
           dispatch({
                type:GET_STATUS,
            payload:res.data
           })
        })
        .catch(err=>console.log(err));
        
}
