import React from "react";

function TodoList({ list, listId, todos, setTodos }) {
  const handleDelete = () => {
      const filtered = todos.filter((todo) => todo.id !== listId)
      setTodos(filtered)
  };

  return (
    <div>
      <ul>
        <li>
          {list}
          <button onClick={handleDelete}>delete</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
