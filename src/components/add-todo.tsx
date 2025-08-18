import { useContext, useState } from "react"
import { TodoContext } from "../context/todo-context";

export default function AddTodo({ setTodos }: {
  setTodos: (args: any) => void
}) {
  const [todo, SetTodo] = useState<string>('');
  const [desc, SetDesc] = useState<string>('')
  const todosList = useContext(TodoContext);

  return <div className="mt-12">
    <div className="flex flex-col m-2">
      <input className="p-2" type="text" value={todo} placeholder="Enter Title" onChange={(e) => SetTodo(e.target.value)} />
      <input className="mt-3 p-2" type="text" value={desc} placeholder="Enter Description" onChange={(e) => SetDesc(e.target.value)} />
    </div>

    <div className="flex w-full item-center justify-center">
      <button className="px-3 cursor-pointer border border-slate-900" onClick={() => {
        setTodos((prev: any) => {
          return [
            ...prev,
            {
              id: 0, completed: false,
              date: new Date(),
              desc,
              title: todo
            }

          ]
        })
        SetTodo('');
        SetDesc('');
        console.log('todo uodated---', todosList)
      }
      }>Add</button>
    </div>
  </div >
}
