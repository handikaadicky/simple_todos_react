import React, { useState } from "react";
import "./App.css";
import InputTodo from "./Components/InputTodo";

function App() {
  
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      Simple Todo List
      <InputTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
