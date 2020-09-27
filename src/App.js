import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from './Components/TodoList'

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([...todos, { completed: true }]);

  return (
    <div>
      Simple Todo List
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
        setCompleted={setCompleted}
        completed={completed}
      />
      
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          completed={todo.completed}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          list={todo.text}
        />
      ))}
    </div>
  );
}

export default App;
