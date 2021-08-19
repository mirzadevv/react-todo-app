import React from "react";
const TodosList = ({ todos, setTodos }) => {
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
    <div className="list-wrapper">
      <ul className="d-flex flex-column todo-list">
        {todos.length === 0 && <h5>There are no todos </h5>}
        {todos.map((todo) => (
          <li className={todo.isCompleted ? "completed" : ""} key={todo.id}>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={todo.isCompleted ? true : false}
                  onChange={() => handleCompletedChange(todo.id)}
                />
                {todo.title}
                <i className="input-helper"> </i>
              </label>
            </div>
            <i
              className="remove mdi mdi-close-circle-outline"
              onClick={() => handleDelete(todo.id)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
