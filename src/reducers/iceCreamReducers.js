import {SELL_ICECREAM, ADD_ICECREAM} from '../actions/actionTypes'

const initialState = {
    amount: 20
}


export const iceCreamReducers = (state = initialState, action) => {

    switch (action.type) {
        case SELL_ICECREAM:
            return {
                ...state ,
                amount : state.amount - action.payload
            }

        case ADD_ICECREAM:
            return{
                ...state ,
                amount : state.amount + action.payload
            }

        default:
            return state;
    }
}
