import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      Simple Todo List
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
