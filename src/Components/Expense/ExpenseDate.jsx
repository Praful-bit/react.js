const ExpenseDate = (props) => {
  const options = { month: "long" };
  const month = props.date.toLocaleString("en-US", options);
  const day = props.date.toLocaleString("es-IN", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
};
export default ExpenseDate;
