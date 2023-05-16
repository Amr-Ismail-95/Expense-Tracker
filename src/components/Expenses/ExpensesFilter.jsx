import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const handleDate = (event) => {
    props.onDateChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select defaultValue={props.date} onChange={handleDate}>
          <option value="All">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
