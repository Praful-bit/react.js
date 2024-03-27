/* eslint-disable react/prop-types */
import  { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAddingExpense(false);
  };

  const startAddingExpenseHandler = () => {
    setIsAddingExpense(true);
  };

  const cancelAddingExpenseHandler = () => {
    setIsAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button onClick={startAddingExpenseHandler}>Add New Expense</button>
      )}
      {isAddingExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddingExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
