
export interface Todo {
  id: number,
  title: string,
  desc: string,
  completed: boolean,
  date: Date,
}

export interface Tab {
  title: string,
  action: () => void,
  isActive: boolean
}
