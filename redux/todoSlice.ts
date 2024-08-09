import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
}

interface TodoState {
  items: Todo[];
}

const initialState: TodoState = {
  items: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
