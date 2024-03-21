/* eslint-disable react/prop-types */
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const removeData = () => {
    //event pass as a parameter
    // const deleteEle = event.target.parentElement
    // deleteEle.remove();

    const deleteEle = document.getElementById("lol");
    deleteEle.remove();
  }

  return (
    <>
      {props.title.map((item) => {
        return (
          <div key={item.id} id="lol">
            <Card className="expense-item" >
              <ExpenseDate date={item.date} />
              <div className="expense-item__description">
                <ExpenseDetails
                  title={item.title}
                  location={item.location}
                  amount={item.amount}
                />
              </div>
              <button onClick={removeData} className="delete">
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
