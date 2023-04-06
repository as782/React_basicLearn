const initial = {count:0};
export default function countReducer(preState = initial, action) {
  
    switch (action.type) {
       
        case 'increment':
            
            return {...preState,count:action.data};
        case 'decrement':
            return {...preState,count:action.data};
        default:
           return preState;
    }
}