import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./ProductSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
