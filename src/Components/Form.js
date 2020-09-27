import React from "react";
import TodoList from "./TodoList";

function Form({ newTodo, setNewTodo, todos, setTodos, setCompleted, completed  }) {
  const handleNewTodoChange = (env) => {
    setNewTodo(env.target.value);
  };

  const handleNewTodo = (env) => {
    env.preventDefault();
    if (newTodo === "") return;
    setTodos([
      ...todos,
      { id: Math.random() * 100, completed: false, text: newTodo },
    ]);
    setNewTodo("");
  };

  const handleCompleted = (e) => {
    console.log(e.target.value)
    setCompleted(completed);
  }

  return (
    <div>
      <form>
        <input
          value={newTodo}
          placeholder="Todos..."
          onChange={handleNewTodoChange}
        ></input>
        <button type="reset" onClick={handleNewTodo}>
          add
        </button>
        <select onChange={handleCompleted}>
          <option>standard</option>
          <option>completed</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
