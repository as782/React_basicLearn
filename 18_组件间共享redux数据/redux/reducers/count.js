import { DECREMENT, INCREMENT } from "../constant";
const initial = 0;
export default function countReducer(preState = initial, action) {
    let {type,data} = action;
    switch (type) {

        case INCREMENT:

            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}