/* eslint-disable react/prop-types */
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const removeData = (id) => {
    props.onDeleteExpense(id);
  };

  // Check if props.expenses exists and it's an array before mapping over it
  if (!props.expenses || !Array.isArray(props.expenses)) {
    return <p>No expenses found.</p>; // Or any other fallback UI
  }

  return (
    <>
      {props.expenses.map((item) => {
        return (
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
        );
      })}
    </>
  );
};

export default ExpenseItem;
