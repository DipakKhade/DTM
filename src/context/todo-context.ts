import { createContext } from "react";
import type { Todo } from "../lib/types";


export const TodoContext = createContext<Todo[]>([])
