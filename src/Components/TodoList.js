import React from "react";

function TodoList({ list }) {
  return (
    <div>
      <ul>
        <li>{list}</li>
      </ul>
    </div>
  );
}

export default TodoList;
