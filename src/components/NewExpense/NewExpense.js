import React, { Component } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

class NewExpense extends Component {
  
  saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    this.props.onAddExpense(expenseData);
  }
  render() {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={this.saveExpenseDataHandler}
        />
      </div>
    );
  }
}
export default NewExpense;
