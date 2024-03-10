import "./ExpenseItem.css";
function ExpenseItem() {
  const amountSpent = 100;
  const locationOfExpenditure = "Grocery Store";

  return (
    <>
      <div className="expense-item">
        <div>Food RS 10</div>
        <div className="expense-item__description">
          <h2>Petrol RS 100</h2>
        </div>
        <div className="expense-item__price">Movie RS 200</div>
      </div>
      <div id="expenseInfo">
        You spent ${amountSpent} at {locationOfExpenditure}.
      </div>
    </>
  );
}
export default ExpenseItem;
