import React from "react";

function InputTodo({ newTodo, setNewTodo, todos, setTodos }) {
  const handleNewTodoChange = (env) => {
    env.preventDefault();
    setNewTodo(env.target.value);
  };

  const handleNewTodo = (env) => {
    env.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    env.target.reset();
  };

  const removeTodo = (id) => {
    todos.filter((todo) => todo.id === id);
  };

  console.log(todos);
  console.log(newTodo);

  return (
    <div>
      <form onSubmit={handleNewTodo}>
        <input placeholder="Todos..." onChange={handleNewTodoChange}></input>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => removeTodo(todo.id)}>delete</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default InputTodo;
