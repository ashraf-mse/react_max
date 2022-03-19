import "./expenseItems.css";
import DateExpenses from "../DateComponent/DateExpenses";
import Card from "../Card/Card";

function ExpenseItems(props) {
  const expenseName = props.expenseName;
  const amount = props.amount;
  // const date = props.date.toISOString();

  return (
    <Card className="expense-item">
      <DateExpenses date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">{amount}$</div>
      </div>
    </Card>
  );
}
export default ExpenseItems;
