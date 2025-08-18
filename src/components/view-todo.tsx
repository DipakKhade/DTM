import { useContext } from "react"
import TodoCard from "./todo-card"
import { TodoContext } from "../context/todo-context"

export default function ViewTodo() {
  const todos = useContext(TodoContext)
  console.log('list in view todo compo---', todos)
  return <>
    <div>
      {todos.map((x, index) => {
        return <div key={index}>
          <TodoCard todo={x} />
        </div>
      })}
    </div>
  </>
}
