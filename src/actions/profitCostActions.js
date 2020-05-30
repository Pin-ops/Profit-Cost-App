import {ADD_PROFIT, ADD_COST} from './actionTypes'


export const addProfit = (number) => {
    return {
        type: ADD_PROFIT ,
        payload : number
        // payload:  each time it is 1, so dont need to write payload  }
    }
}

export const addCost = (number) => {
    return {
        type:ADD_COST,
        payload: number
    }
}