import type { Todo } from "../lib/types"
import TodoCard from "./todo-card"


export default function ViewTodo({ todo }: {
  todo: Todo[]
}) {
  return <>
    <div>
      {todo.map((x, index) => {
        return <div key={index}>
          <TodoCard todo={x} />
        </div>
      })}
    </div>
  </>
}
