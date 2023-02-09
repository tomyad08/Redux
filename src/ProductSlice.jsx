import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Async Thunk
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get("http://localhost:3000/categories");
  return response.data;
});

export const AddTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const response = await axios.post("http://localhost:3000/categories", {
    title: todo,
  });
  return response.data;
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  const title = todo.text;
  const id = todo.id;
  const response = await axios.put(
    `http://localhost:3000/categories/${todo.id}`,
    { id, title }
  );
  console.log(todo.id);
  console.log(todo.text);
  return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(` http://localhost:3000/categories/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
    },
    [AddTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
