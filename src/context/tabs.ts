import { createContext } from "react";
import type { Tab } from "../lib/types";

export const TabsContext = createContext<Tab[]>([])

