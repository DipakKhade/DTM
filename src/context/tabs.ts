import { createContext } from "react";
import type { Tab } from "../lib/types";

export const TabsContext = createContext<Tab[]>([{ title: 'Completed', action: () => { console.log('complted action') }, isActive: false },
{ title: 'Add', action: () => { console.log('add action') }, isActive: false },
{ title: 'Incomplete', action: () => { console.log('Incomplete action') }, isActive: true },
])

