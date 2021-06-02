import "./ExpenseItem.scss";
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Card/Card'
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date}/>
        </div>
      <div className="expense-item__name">{props.title}</div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
  }

export default ExpenseItem;
