import React from "react";
import { Provider } from "react-redux";

// Redux
import store from "./redux/store";

// Components
import Todo from "./components/todo/Todo";
import Task from "./components/task/Task";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Todo />
        <Task />
      </Provider>
    </>
  );
};

export default App;
