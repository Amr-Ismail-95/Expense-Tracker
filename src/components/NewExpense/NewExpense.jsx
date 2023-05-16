import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addButton, SetAddButton] = useState(true);
  const saveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAdd(expenseData);
  };

  const handleNewItem = () => {
    SetAddButton(false);
  };
  const handleAddOrCancelExpense = () => {
    SetAddButton(true);
  };

  return (
    <div className="new-expense">
      {addButton && <button onClick={handleNewItem}>Add New Expense</button>}
      {!addButton && (
        <ExpenseForm
          onSave={saveHandler}
          onClickSaveOrCancelButton={handleAddOrCancelExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
