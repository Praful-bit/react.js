import "./ExpenseItem.css";

export default function ExpenseDetails(props) {
  return (
    <>
      
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">{props.amount}</div>
     
    </>
  );
}
