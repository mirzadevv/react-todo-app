import React, { useState } from "react";
import InputForm from "./InputForm";
import TodosList from "./TodosList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleCompletedChange = (todoId) => {
    let newTodos = [...todos];
    const index = todos.findIndex((element) => element.id === todoId);
    newTodos[index] = {
      ...newTodos[index],
      isCompleted: !newTodos[index].isCompleted,
    };
    setTodos(newTodos);

    /* another way to changing the object in the array 
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });
    setTodos(newTodos); */
  };

  const handleDelete = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Simple Todo App</h4>
              <InputForm setTodos={setTodos} />
              <TodosList
                todos={todos}
                onCompletedChange={handleCompletedChange}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
