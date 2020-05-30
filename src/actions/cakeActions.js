import {SELL_CAKE, ADD_CAKE} from './actionTypes'


export const sellCake = () => {
    return {
        type: SELL_CAKE ,
        payload : 1
        // payload:  each time it is 1, so dont need to write payload  }
    }
}

export const addCake = (num) => {
    return {
        type:ADD_CAKE,
        payload: num
    }
}