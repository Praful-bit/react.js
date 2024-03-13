/* eslint-disable react/prop-types */
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <>
      {props.title.map((item) => {
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
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default ExpenseItem;
