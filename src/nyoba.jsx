import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todo) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: todo,
      completed: false,
    });
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (todo) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return id;
  }
);

// Slice
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // Fetch Todos
    [fetchTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    // Add Todo
    [addTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload);
    },
    [addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    // Update Todo
    [updateTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
    }},
});

export const { } = todosSlice.actions;
export default todosSlice.reducer;
