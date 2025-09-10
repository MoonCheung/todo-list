import { useState, type FormEvent } from "react";

type TodoFormProps = {
  addTodo: (text: string) => void
}

export default function TodoForm({addTodo}: TodoFormProps) {
  const [content, setContent] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    addTodo(content)
    setContent('')
  }

  return (
    <form className="add" onSubmit={handleSubmit}>
      <label htmlFor="add" className="add">Add a new todo:</label>
      <input type="text" className="form-control m-auto" name="add" id="add" placeholder='Learning React' value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  )
}