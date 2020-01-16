import {GET_STATUS} from '../actions/types';

const initialState={
    status:null
}

export default function (state=initialState,action) {
    switch (action.type) {
        case GET_STATUS:
            return{
                ...state,
                status:action.payload
            }
            break;
    
        default:
           return state;
    }
}