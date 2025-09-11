import type { Route } from './+types/home'
import { type ChangeEvent } from 'react'
import TodoForm from '~/components/todo-form'
import ListItem from '~/components/list-item'
import { useTodoStore } from '~/store';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore((state) => state);

  const handleSearchTodo = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const val = event.target.value.toLowerCase();
    Array.from(document.querySelector(".list-group")!.children).forEach((li) => {
      if(!li.textContent?.toLowerCase().includes(val)){
        li.classList.add("hidden")
      }else{
        li.classList.remove("hidden")
      }
    })
  }

  return (
    <div className="max-w-[450px] mr-auto ml-auto">
      <header className="text-center text-white my-4">
        <h1 className="title">Todo List</h1>
        <input type="text" className="form-control m-auto" name="search" onChange={handleSearchTodo} placeholder="search todos" />
      </header>
      <ListItem todos={todos} deleteTodo={deleteTodo} toggleTodo={completeTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  )
}
