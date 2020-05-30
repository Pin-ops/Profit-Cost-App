import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {sellCake, addCake} from '../actions/cakeActions'
import {addProfit, addCost} from '../actions/profitCostActions';


function CakeHook() {

    const [num, setNum] = useState(0)

    const deger = useSelector ( state => state.cake.numOfCakes )

    const dispatch = useDispatch()

    return (
        <div>
            <h2> Number of Cakes - {deger} </h2>
            <button onClick={ () => {
                dispatch(sellCake())
                dispatch(addProfit(2))
            } } > Sell One Cake </button>
            <br/>
            <br/>
            <input type="number" onChange = { (e)=> setNum(Number(e.target.value)) } />
            <button onClick= { () => {
                dispatch(addCake(num))
                dispatch(addCost(1 * num))
            }}> Add Some Cake </button>


        </div>
    )
}

export default CakeHook
