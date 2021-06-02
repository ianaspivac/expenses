import "./NewExpenseForm.scss";
import NewExpenseForm from "./NewExpenseForm";
import {useState}from "react";
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
  };

    const [isFormShown, setFormShown] = useState(false);
    const toggleForm = () => {
      setFormShown((prevState) => !prevState);
    };
  if (isFormShown){
    return (
      <div className="new-expense">
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleForm}
        ></NewExpenseForm>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button
        onClick={toggleForm}
      >Add expense</button>
    </div>
  );
}

export default NewExpense;
