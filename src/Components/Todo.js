import React from "react";

function Todo({ todos, setTodos, text, todo }) {
  console.log("st");
  console.log(todos);

  const handleDelete = () => {
    const filtered = todos.filter((item) => item.id !== todo.id);
    setTodos(filtered);
  };

  const handleChecklist = () => {
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


  return (
    <div>
      <li className={todo.completed ? "completed" : ""}>
        {text}
        <button onClick={handleChecklist}>checklist</button>
        <button onClick={handleDelete}>delete</button>
      </li>
    </div>
  );
}

export default Todo;
