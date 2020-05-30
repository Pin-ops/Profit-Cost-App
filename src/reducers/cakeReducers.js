import {SELL_CAKE, ADD_CAKE} from '../actions/actionTypes'

const initialState = {
    numOfCakes: 10
}


export const cakeReducers = (state = initialState, action) => {

    switch (action.type) {
        case SELL_CAKE:
            return {
                ...state ,
                numOfCakes : state.numOfCakes - action.payload
            }

        case ADD_CAKE:
            return{
                ...state ,
                numOfCakes : state.numOfCakes + action.payload
            }

        default:
            return state;
    }
}
