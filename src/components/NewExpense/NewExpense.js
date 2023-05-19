import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const onSubmitExpenseHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm submitExpense={onSubmitExpenseHandler} />
    </div>
  );
}

export default NewExpense;
