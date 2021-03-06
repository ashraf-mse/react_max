import ExpenseItems from "../ExpenseItems/ExpenseItems";
import "./expenses.css";
import Card from "../Card/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItems
        expenseName={props.exp[0].expenseName}
        amount={props.exp[0].amount}
        date={props.exp[0].date}
      />
      <ExpenseItems
        expenseName={props.exp[1].expenseName}
        amount={props.exp[1].amount}
        date={props.exp[1].date}
      />
      <ExpenseItems
        expenseName={props.exp[2].expenseName}
        amount={props.exp[2].amount}
        date={props.exp[2].date}
      />
      <ExpenseItems
        expenseName={props.exp[3].expenseName}
        amount={props.exp[3].amount}
        date={props.exp[3].date}
      />
    </Card>
  );
};

export default Expenses;
