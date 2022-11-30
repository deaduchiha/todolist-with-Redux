import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Action
import { addTodo } from "../../redux/todo/todoAction";

const Todo = () => {
  const date = new Date().toLocaleDateString("fa-IR-u-nu-latn");
  const time = new Date();
  const todayTime = ` ${date} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = () => {
    dispatch(addTodo(value, todayTime));
    setValue("");
    console.log(todayTime);
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" />
      <button onClick={submitHandler}>submit</button>
    </div>
  );
};

export default Todo;