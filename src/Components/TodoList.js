import React from "react";
import Todo from "../Components/Todo";

function TodoList({ todos, setTodos, filtered }) {
  console.log(filtered)
  
  return (
    <div>
      <ul>
        {filtered.map((todo) => (
          <Todo key={todo.id} setTodos={setTodos} todos={todos} text={todo.text} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
