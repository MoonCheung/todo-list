import { create } from "zustand";
import { nanoid } from 'nanoid';

type todoState = {
  todos: Array<object>
}

type todoAction = {
  addTodo: (
    param: string
  ) => void
  deleteTodo: (
    param: string
  ) => void
  completeTodo: (
    param: string
  ) => void
}

export const useTodoStore = create<todoState & todoAction>((set) => ({
  todos: [],
  addTodo: (todoText) => 
    set((state) => ({
      todos: [...state.todos, { text: todoText, id: nanoid(), isCompleted: false }]
    })),
  deleteTodo: (todoId) => 
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId)
    })),
  completeTodo: (todoId) => 
    set((state) => ({
      todos: state.todos.map((todo) => {
        if(todo.id === todoId) {
          return {...todo, isCompleted: true}
        }

        return todo
      })
    }))
}))