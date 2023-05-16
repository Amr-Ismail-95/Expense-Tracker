import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const data = props.expenses;
  const [currentDate, setCurrentDate] = useState("All");
  const dateChanger = (date) => {
    setCurrentDate(date);
  };
  const filteredData =
    currentDate === "All"
      ? data
      : data.filter(
          (expense) => expense.date.getFullYear().toString() === currentDate
        );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter date={currentDate} onDateChange={dateChanger} />
        <ExpensesChart expenses={filteredData}/>
        {<ExpensesList items={filteredData} />}
      </Card>
    </div>
  );
};

export default Expenses;
