import React from "react";

function Form({ newTodo, setNewTodo, todos, setTodos, setStatus }) {
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

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

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
        <select onChange={handleStatus}>
          <option>all</option>
          <option>completed</option>
          <option>uncompleted</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
