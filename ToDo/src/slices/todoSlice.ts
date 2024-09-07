import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDoItemType } from '../components/props/ToDoItemType'

interface Todo {
    title: string;
    datetime: string;
    status: 'active' | 'completed';
  }

export interface ToDoState {
    todos: Todo[]
}

const initialState: ToDoState = {
  todos: [
    {
      title: 'Need to complete a book',
      datetime: '5:30 5/09/2024',
      status: 'active'
    },
    {
      title: 'Need to complete all fullstack projects and also some other projects',
      datetime: '5:30 5/09/2024',
      status: 'active'
    },
    {
      title: 'Need to go to gym daily',
      datetime: '5:30 5/09/2024',
      status: 'active'
    },
    {
      title: 'Need to complete a book',
      datetime: '5:30 5/09/2024',
      status: 'completed'
    },
  ],
}

export const todoSlice = createSlice({
  name: 'TODO',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.push(action.payload)
    },
    updateStatus: (state, action: PayloadAction<{id:number, status:"active" | "completed"}>) => {
    //   state.value -= 1
    state.todos[action.payload.id].status = action.payload.status
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    state.todos = state.todos.filter((todo:Todo, idx:number) => idx != action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, updateStatus, deleteTodo } = todoSlice.actions

export default todoSlice.reducer