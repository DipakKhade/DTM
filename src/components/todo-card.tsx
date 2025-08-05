import { useContext } from "react";
import type { Todo } from "../lib/types";
import { VscCheck } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { TodoContext } from "../context/todo-context";
export default function TodoCard({ todo }: {
  todo: Todo
}) {
  const todos = useContext(TodoContext)
  return <>
    <div className="flex border border-slate-200 justify-between item-center rounded-sm p-2">
      <div className="flex flex-col">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
      </div>
      <div className="flex space-x-4 text-2xl">
        <VscCheck onClick={() => {
          console.log('todos --', todos)
          console.log('1 todo --', todo)
          todos.filter(x => x.id == todo.id)[0]['completed'] = true
          console.log('afet todo', todos)
        }} />
        <VscTrash onClick={() => {
          console.log('control is here', todo)
          todos.filter(x => x.id !== todo.id)
        }} />
      </div>
    </div>
  </>
}
