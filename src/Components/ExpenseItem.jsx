import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = "2024-03-23";
  const expenseRate = '$294.67';
  const expenseTitle = 'Grocery Shop'
  const locationOfExpenditure = "Uttar Pardesh";
  return (
    <>
      <div className="expense-item">
        <div>{expenseDate}</div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <h2>{locationOfExpenditure}</h2>
          <div className="expense-item__price">{expenseRate}</div>
        </div>
      </div>
    </>
  );
}
export default ExpenseItem;
