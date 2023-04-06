import { DECREMENT,INCREMENT } from "./constant";
const initial = {count:0};
export default function countReducer(preState = initial, action) {
  
    switch (action.type) {
       
        case INCREMENT:
            
            return {...preState,count:action.data};
        case DECREMENT:
            return {...preState,count:action.data};
        default:
           return preState;
    }
}