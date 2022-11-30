const addTodo = (id, todos, date) => {
  return {
    type: "ADD",
    payload: { id, todos, date },
  };
};

const removeTodo = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};

export { addTodo, removeTodo };
