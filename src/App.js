import React from "react";
import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import Expense from "./components/Expense";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import { AppProvider } from "./context/AppContext";


function App(){
  return(
    <AppProvider>
      <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <div className="container">
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <Expense />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </div>
    </div>
    </AppProvider>
  )
}


export default App;