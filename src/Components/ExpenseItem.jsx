import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from './ExpenseDetails'

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <>
    {props.title.map((item)=>{
return (
  <div key={item.id}>
    <div className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <ExpenseDetails
          title={item.title}
          location={item.location}
          amount={item.amount}
        />
      </div>
     </div>
 </div>
);
    })}
     
    </>
  );
}

export default ExpenseItem;





