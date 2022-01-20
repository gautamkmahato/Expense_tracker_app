import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Remaining() {
    const {expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return(total = total + item.cost);
    }, 0);
    const remaining = budget - totalExpenses;

    const alertType = totalExpenses > budget ? 'alert-danger': 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${remaining}</span>
        </div>
    )
}

export default  Remaining;