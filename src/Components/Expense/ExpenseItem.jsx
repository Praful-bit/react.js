// ExpenseItem.jsx
/* eslint-disable react/prop-types */
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from "./ExpensesChart";

const ExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const removeData = (id) => {
    props.onDeleteExpense(id);
  };

  if (!props.expenses && !Array.isArray(props.expenses)) {
    return <p>No expenses found.</p>;
  }

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
      {filteredExpenses.map((item) => (
        <div key={item.id}>
          <li className="expenses-list">
            <Card className="expense-item">
              <ExpenseDate date={item.date} />
              <div className="expense-item__description">
                <ExpenseDetails
                  title={item.title}
                  location={item.location}
                  amount={item.amount}
                />
              </div>
              <button onClick={() => removeData(item.id)} className="delete">
                Delete
              </button>
            </Card>
          </li>
        </div>
      ))}
    </>
  );
};

export default ExpenseItem;
