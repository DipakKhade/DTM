import { useState } from "react"
import type { Todo } from "../lib/types"


export default function ViewTodo() {
  const [todo, setTodo] = useState<Todo[]>([
    { id: 1, completed: false, date: new Date, desc: 'this is a todo desc', title: 'title is this' }
  ])
  return <>
    <div>
      {todo.map((x, index) => {
        return <div key={index}>
          {x.title}
        </div>
      })}
    </div>
  </>
}
