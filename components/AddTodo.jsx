import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [data, setData] = useState("");
  const addNewTodo = (data) => {
    if (data === "") return;
    else {
      const todo = {
        id: Math.random() * 100,
        name: data,
      };
      addTodo(todo);
      setData("");
    }
  };
  return (
    <div>
      <h1>Todo App</h1>
      <div className="addtodo">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Add your new todo"
        />
        <button onClick={() => addNewTodo(data)}>+</button>
      </div>
    </div>
  );
};

export default AddTodo;
