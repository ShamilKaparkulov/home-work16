import React, { Component } from "react";
import "./ExpenseForm.css";

;

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      userInput: {
        enteredTitle: "",
        enteredDate: "",
        enteredAmount: "",
      },
    };
  }

  submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: this.state.userInput.enteredTitle,
      amount: this.state.userInput.enteredAmount,
      date: new Date(this.state.userInput.enteredDate),
    };
  
    this.props.onSaveExpenseData(expenseData)
    this.setState("")
  }

  changeValuesHadler(key) {
    return (event) => {
      this.setState((prevState) => {
        return{
          ...prevState,
          userInput:{...this.state.userInput,[key]:event.target.value}
        }
      })
    };
    
  }

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={this.state.userInput.enteredTitle}
              onChange={this.changeValuesHadler(
              "enteredTitle"
              )}
              
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={this.state.userInput.enteredAmount}
              onChange={this.changeValuesHadler(
                "enteredAmount"
              )}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={this.state.userInput.enteredDate}
              onChange={this.changeValuesHadler("enteredDate")}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
// const [userInput, setUserInput] = useState(defaultValues);

// const submitHandler = (event) => {
//   event.preventDefault();

//   const expenseData = {
//     title: userInput.enteredTitle,
//     amount: userInput.enteredAmount,
//     date: new Date(userInput.enteredDate),
//   };

//   props.onSaveExpenseData(expenseData);

//   setUserInput(defaultValues);
// };
// const changeValuesHadler = (key) => {
//   return (event) => {
//     setUserInput((prevState) => {
//       return {
//         ...prevState,
//         [key]: event.target.value
//       }
//     })
//   };
// };

// return (
//   <form onSubmit={submitHandler}>
//     <div className="new-expense__controls">
//       <div className="new-expense__control">
//         <label>Title</label>
//         <input
//           type="text"
//           value={userInput.enteredTitle}
//           onChange={changeValuesHadler("enteredTitle")}
//         />
//       </div>
//       <div className="new-expense__control">
//         <label>Amount</label>
//         <input
//           type="number"
//           value={userInput.enteredAmount}
//           onChange={changeValuesHadler("enteredAmount")}
//         />
//       </div>
//       <div className="new-expense__control">
//         <label>Date</label>
//         <input
//           type="date"
//           min="2019-01-01"
//           max="2022-12-31"
//           value={userInput.enteredDate}
//           onChange={changeValuesHadler("enteredDate")}
//         />
//       </div>
//     </div>
//     <div className="new-expense__actions">
//       <button type="submit">Add Expense</button>
//     </div>
//   </form>
// )
