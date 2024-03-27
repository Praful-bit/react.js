// ExpenseDate.jsx
/* eslint-disable react/prop-types */
import "./ExpenseItem.css";

const ExpenseDate = (props) => {
  const options = { month: "long" };
  const month = props.date.toLocaleString("en-US", options);
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__Year">{year}</div>
    </div>
  );
};
export default ExpenseDate;
