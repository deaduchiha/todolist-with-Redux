const initialState = {
  todos: [],
};

export let baseNumber = 1;

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      baseNumber++;
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "REMOVE":
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.payload)],
      };

    default:
      return state;
  }
};

export default todoReducer;
