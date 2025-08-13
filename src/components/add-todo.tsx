import { useContext, useState } from "react"
import { TodoContext } from "../context/todo-context";

export default function AddTodo() {
  const [todo, SetTodo] = useState<string>('');
  const [desc, SetDesc] = useState<string>('')
  const todosList = useContext(TodoContext);

  return <>
    <div>
      <input type="text" placeholder="Enter Title" onChange={(e) => SetTodo(e.target.value)} />
      <input type="text" placeholder="Enter Description" onChange={(e) => SetDesc(e.target.value)} />
    </div>

    <div>
      <button onClick={() => {
        todosList.push({
          id: todosList[todosList.length - 1]['id'] + 1,
          completed: false,
          date: new Date(),
          desc,
          title: todo
        })
      }}>Add</button>
    </div>
  </>
}
