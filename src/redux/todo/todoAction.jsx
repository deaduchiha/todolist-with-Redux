const addTodo = (todos, date) => {
  return {
    type: "ADD",
    payload: { todos, date },
  };
};

export { addTodo };
