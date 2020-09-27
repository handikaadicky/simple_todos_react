import React from "react";

function TodoList({ completed, list, todo, todos, setTodos }) {
  const handleDelete = () => {
    const filtered = todos.filter((item) => item.id !== todo.id);
    setTodos(filtered);
  };

  const handleCompeleted = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  console.log(todo.id)



  return (
    <div>
      <ul>
        <li className={todo.completed ? "completed" : "App"}>
          {list}
          <button type="button" onClick={handleCompeleted}>
            checklist
          </button>
          <button onClick={handleDelete}>delete</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
