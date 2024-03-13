/* eslint-disable react/prop-types */
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </>
  );
};
export default ExpenseDetails;
