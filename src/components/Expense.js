import React, {useContext} from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

function Expense() {
    const {expenses} = useContext(AppContext);
    
    //console.log(expenses.expense)
    return (
        <>
            <ul className='list-group'> 
                {expenses.map((data) => (
                    <ExpenseItem id={data.id} name={data.name} cost={data.cost} />
                ))}
            </ul>
        </>
    )
}


export default  Expense;