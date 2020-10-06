import { ADD_TODO, DONE_TODO } from "../constants/ActionTypes";

export const addTodo = (name) => ({
  type: ADD_TODO,
  payload: {
    name,
    done: false,
  },
});

export const doneTodo = (name) => ({
  type: DONE_TODO, // mandatory key
  payload: {
    name,
    done: false,
  },
});
