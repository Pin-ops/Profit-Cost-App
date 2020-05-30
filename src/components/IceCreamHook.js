import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {sellIceCream, addIceCream} from '../actions/iceCreamActions'
import {addProfit, addCost} from '../actions/profitCostActions';


function IceCreamHook() {

    const [num, setNum] = useState(0)

    const deger = useSelector ( state => state.eis.amount )

    const dispatch = useDispatch()

    return (
        <div>
            <h2> Number of Ice Creams - {deger} </h2>
            <button onClick={ () => {
                dispatch(sellIceCream())
                dispatch(addProfit(1))
            } } > Sell One Ice Cream </button>
            <br/>
            <br/>
            <input type="number" onChange = { (e)=> setNum(Number(e.target.value)) } />
            <button onClick= { () => {
                dispatch(addIceCream(num))
                dispatch(addCost(0.5 * num))
            }}> Add Some Ice Cream </button>


        </div>
    )
}

export default IceCreamHook
