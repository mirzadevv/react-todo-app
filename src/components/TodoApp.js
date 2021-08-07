import React, { useState } from "react";
import InputForm from "./InputForm";
import TodosList from "./TodosList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Simple Todo App</h4>
              <InputForm setTodos={setTodos} />
              <TodosList todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
