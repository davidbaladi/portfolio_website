import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./todo-app.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
    const loadedTodos = JSON.parse(localStorage.getItem("todos"));
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  const updateTodo = (todoId, editTodo) => {
    if (!editTodo.text || /^\s*$/.test(editTodo.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? editTodo : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clearTodos = (e) => {
    e.preventDefault();
    setTodos([]);
  };

  return (
    <>
      <div className="todo-app">
        <h1 className="todo-app-title">What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          setIsEditing={setIsEditing}
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        {isEditing ? null : (
          <div className="clear-button" onClick={(e) => clearTodos(e)}>
            <u>Clear</u> To-do List
          </div>
        )}
      </div>
    </>
  );
}

export default TodoApp;
