import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo,deleteTodo }) => {
  return (
    <div className="todolist">
      {todo.length ? (
        todo.map((item) => <Todo key={item.id} data={item} deleteTodo={deleteTodo}/>)
      ) : (
        <div className="wrong">
          <p>You don't have any records yet</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
