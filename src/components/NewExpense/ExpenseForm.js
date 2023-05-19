import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onTitleChangedHandler = (event) => {
    setTitle(event.target.value);
  };

  const onAmountChangedHandler = (event) => {
    setAmount(event.target.value);
  };

  const onDateChangedHandler = (event) => {
    setDate(event.target.value);
  };

  const onSubmitExpenseHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.submitExpense(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChangedHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={amount}
            onChange={onAmountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={onDateChangedHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={onSubmitExpenseHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
