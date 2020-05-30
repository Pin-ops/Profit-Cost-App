import {ADD_PROFIT, ADD_COST} from '../actions/actionTypes'

const initialState = {
    miktar : 0
}


export const profitCostReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PROFIT:
            return {
                ...state ,
                miktar : state.miktar + action.payload
            }

        case ADD_COST:
            return{
                ...state ,
                miktar : state.miktar - action.payload
            }

        default:
            return state;
    }
}
