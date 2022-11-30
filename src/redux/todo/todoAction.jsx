const addTodo = (id, value, date) => {
  return {
    type: "ADD",
    payload: { id, value, date, done: true },
  };
};

const removeTodo = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};

const doneTodo = (id) => {
  return {
    type: "DONE",
    payload: id,
  };
};

export { addTodo, removeTodo, doneTodo };
