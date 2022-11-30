import React from "react";
import { useSelector } from "react-redux";

const Task = () => {
  const state = useSelector((state) => state.todoState);

  console.log(state.todos);

  return (
    <div>
      {state.todos.map((item) => (
        <div key={Math.random()}>
          <span>{item.todos}</span>
          <span>{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Task;
