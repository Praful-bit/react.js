/* eslint-disable react/prop-types */
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const removeData = (id) => {
    props.onDeleteExpense(id);
  };

  if (!props.expenses || !Array.isArray(props.expenses)) {
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
      {filteredExpenses.length === 0 ? (
        <p>No expenses found for the selected year.</p>
      ) : (
        filteredExpenses.map((item) => (
          <div key={item.id}>
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
          </div>
        ))
      )}
    </>
  );
};

export default ExpenseItem;
