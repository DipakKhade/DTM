import type { Todo } from "../lib/types";
import { VscCheck } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
export default function TodoCard({ todo }: {
  todo: Todo
}) {
  return <>
    <div className="flex border border-slate-200 justify-between item-center rounded-sm p-2">
      <div className="flex flex-col">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
      </div>
      <div className="flex space-x-4 text-2xl">
        <VscCheck />
        <VscTrash />
      </div>
    </div>
  </>
}
