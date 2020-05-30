import {SELL_ICECREAM, ADD_ICECREAM} from './actionTypes'


export const sellIceCream = () => {
    return {
        type: SELL_ICECREAM ,
        payload : 1
        // payload:  each time it is 1, so dont need to write payload  }
    }
}

export const addIceCream = (num) => {
    return {
        type:ADD_ICECREAM,
        payload: num
    }
}