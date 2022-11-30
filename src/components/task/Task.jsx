import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import styles from "./Task.module.css";

// Action
import { removeTodo, doneTodo } from "../../redux/todo/todoAction";

const Task = () => {
  const state = useSelector((state) => state.todoState);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const doneHandler = (id) => {
    dispatch(doneTodo(id));
  };

  return (
    <div className={styles.mainContainer}>
      {state.todos.map((item) => (
        <div
          key={item.id}
          className={`${styles.container} ${
            item.done ? styles.active : styles.noActive
          }`}
        >
          <p className={styles.title}>
            Task: <span>{item.value}</span>
          </p>
          <p className={styles.title}>
            Date: <span>{item.date}</span>
          </p>
          <div className={styles.button}>
            <button
              className={styles.remove}
              onClick={() => removeHandler(item.id)}
            >
              Remove
            </button>
            <button
              className={item.done ? styles.done : styles.noDone}
              onClick={() => doneHandler(item.id)}
            >
              Done
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
