import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState();

  const onYearChangedHandler = (event) => {
    setSelectedYear(event.target.value);
  }

  console.log(props.expenses)

  return (
    <div>
      <ExpensesFilter onYearChanged={onYearChangedHandler}/>
      <div className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
