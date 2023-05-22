import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const onSubmitExpenseHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  const onAddNewExpenseHandler = (event) => {
    event.preventDefault();
    setShowNewExpenseForm(true);
  };

  const onCancelHandler = () => {
    setShowNewExpenseForm(false);
  };

  const addNewExpenseButton = (
    <button type="submit" onClick={onAddNewExpenseHandler}>
      Add New Expense
    </button>
  );

  return (
    <div className="new-expense">
      {showNewExpenseForm ? (
        <ExpenseForm
          submitExpense={onSubmitExpenseHandler}
          onCancel={onCancelHandler}
        />
      ) : (
        addNewExpenseButton
      )}
    </div>
  );
}

export default NewExpense;
