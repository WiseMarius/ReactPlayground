import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2023");

  let expensesToDisplay = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(selectedYear);
  });

  console.log(expensesToDisplay);

  const onYearChangedHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChanged={onYearChangedHandler}
          selectedYear={selectedYear}
        />
        {expensesToDisplay.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
