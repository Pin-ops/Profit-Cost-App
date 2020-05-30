import {combineReducers} from 'redux';
import {cakeReducers} from './cakeReducers';
import {iceCreamReducers} from './iceCreamReducers'
import {profitCostReducer} from './profitCostReducers'


export const rootReducer = combineReducers ( {
    cake : cakeReducers,
    eis : iceCreamReducers,
    kar : profitCostReducer
})