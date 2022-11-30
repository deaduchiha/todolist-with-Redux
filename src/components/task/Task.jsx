import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Action
import { removeTodo } from "../../redux/todo/todoAction";

const Task = () => {
  const state = useSelector((state) => state.todoState);
  const dispatch = useDispatch();
  console.log(state.todos);

  const removeHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {state.todos.map((item) => (
        <div key={item.id}>
          <span>{item.todos}</span>
          <span>{item.date}</span>
          <button onClick={() => removeHandler(item.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default Task;
