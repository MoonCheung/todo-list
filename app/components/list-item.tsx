import { Trash2, Check } from 'lucide-react';
import { Checkbox } from '@headlessui/react'

export default function ListItem({ todos, deleteTodo, toggleTodo}){
  return (
    <ul className="list-group">
      {todos.map(({id, text, isCompleted}) => (
        <li key={id} className="list-group-item">
          <Checkbox onChange={() => toggleTodo(id)} checked={isCompleted} className="group block size-5 rounded border bg-white">
            <Check width="18" height="18" className={isCompleted ? "text-black" : ""} />
          </Checkbox>
          <span className={isCompleted ? "line-through" : ""}>{text}</span>
          <Trash2 width="18" height="18" className="delete" onClick={() => deleteTodo(id)} />
        </li>
      ))}
    </ul>
  )
}