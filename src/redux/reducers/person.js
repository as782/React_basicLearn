import { ADD_PERSON } from '../constant'
const initialState = [{ id: '001', name: '王志', age: 18 }]

export default function personReducer (state = initialState, { type, data }) {
    switch (type) {
        case ADD_PERSON:
            return [data, ...state]
        default:
            return state
    }
}
