import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const addTodo = (data) => {
    setTodo([...todo,data])
  }

  const deleteTodo = (id) => {
    const newTodo = todo.filter(item => item.id !== id)
    setTodo(newTodo)
  }
  return (
    <div className="todo">
      <AddTodo addTodo={addTodo}/>
      <TodoList todo={todo} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default TodoApp;
