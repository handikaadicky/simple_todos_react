import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  const handleFilter = () => {
    switch (status) {
      case "uncompleted":
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      case "completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      default:
        setFiltered(todos);
        break;
    }
  };

  // useEffect
  useEffect(() => {
    handleFilter();
  }, [todos, status]);

  return (
    <div>
      {status}
      Simple Todo List
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filtered={filtered} />
    </div>
  );
}

export default App;
