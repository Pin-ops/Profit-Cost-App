import React from 'react'
import { useSelector } from 'react-redux'

function ProfitCostHook() {

    const profitCost = useSelector( state => state.kar.miktar)

    return (
        <div>
            <h2> Profit Cost State - {profitCost} </h2>
        </div>
    )
}

export default ProfitCostHook
