import { DONE_TODO, ADD_TODO } from "../constants/ActionTypes";

const itemActions = (
  //this is the key in your redux store.

  state = {
    todos: [],
  },

  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DONE_TODO:
      const doneItem = state.todos.find(
        (item) => item.name === action.payload.name
      );
      doneItem.done = !doneItem.done;
      const others = state.todos.filter(
        (item) => item.name !== action.payload.name
      );
      return {
        ...state,
        todos: [...others, doneItem],
      };
    default:
      return state;
  }
};

export default itemActions;
