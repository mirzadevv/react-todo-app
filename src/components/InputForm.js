import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ setTodos }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleAdd = () => {
    setTodos((todos) => {
      return [
        {
          id: uuidv4(),
          title: todoValue,
          isCompleted: false,
        },
        ...todos,
      ];
    });
    setTodoValue("");
  };

  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        value={todoValue}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleAdd}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
};

export default InputForm;
