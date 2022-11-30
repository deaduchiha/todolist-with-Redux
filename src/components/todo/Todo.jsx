import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Action
import { addTodo } from "../../redux/todo/todoAction";
import { baseNumber } from "../../redux/todo/todoReducer";

// Styles
import styles from "./Todo.module.css";

const Todo = () => {
  const dispatch = useDispatch();

  const date = new Date().toLocaleDateString("fa-IR-u-nu-latn");
  const time = new Date();
  const todayTime = ` ${date} -- ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  const [value, setValue] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Enter your task:");

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = () => {
    if (value === "") setPlaceHolder("Enter your task first:'(🥲");
    else {
      dispatch(addTodo(baseNumber, value, todayTime));
      setValue("");
      setPlaceHolder("enter your next task...");
      console.log(value, "this is task");
    }
  };

  return (
    <div className={styles.container}>
      <input
        placeholder={placeHolder}
        value={value}
        onChange={changeHandler}
        type="text"
      />
      <button onClick={submitHandler}>submit</button>
    </div>
  );
};

export default Todo;
