import React from "react";
import TodoList from "./TodoList";

function Form({ newTodo, setNewTodo, todos, setTodos }) {
  const handleNewTodoChange = (env) => {
    env.preventDefault();
    setNewTodo(env.target.value);
  };

  const handleNewTodo = (env) => {
    env.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
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
        {todos.map((todo) => (
          <TodoList key={todo.id} list={todo.text} />
        ))}
      </form>
    </div>
  );
}

export default Form;
