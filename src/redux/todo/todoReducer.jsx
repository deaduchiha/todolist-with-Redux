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

    case "DONE":
      return {
        ...state,
        todos: [
          ...state.todos.map((item) => {
            if (item.id === action.payload) item.done = false;
            return item;
          }),
        ],
      };

    default:
      return state;
  }
};

export default todoReducer;
