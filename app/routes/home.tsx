import type { Route } from './+types/home'
import { Trash2 } from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {

  return (
    <div className="max-w-[450px] mr-auto ml-auto">
      <header className="text-center text-white my-4">
        <h1 className="title">Todo List</h1>
        <form className="search">
          <input type="text" className="form-control m-auto" name="search" placeholder="search todos" />
        </form>
      </header>

      <ul className="list-group">
        <li className="list-group-item">
          <span>eat pizza</span>
          <Trash2 width="18" height="18" className="delete" />
        </li>
        
          <li className="list-group-item">
          <span>listen to music</span>
          <Trash2 width="18" height="18" className="delete" />
        </li>
      </ul>
      <form className="add">
        <label for="add" className="add">Add a new todo:</label>
        <input type="text" className="form-control m-auto" name="add" id="add" />
      </form>
    </div>
  )
}
