/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  const [Amount,setAmount]=useState(props.amount)
  const editData =()=>{
    setAmount('100$')
  }
  return (
    <>
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <div className="expense-item__price">{Amount}</div>
      <button onClick={editData} className="edit">Edit</button>
    </>
  );
};
export default ExpenseDetails;
