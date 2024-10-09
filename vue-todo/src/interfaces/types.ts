export interface TodoLists {
  items: TodoList[]
}

export interface TodoList {
  headline : string,
  items: TodoItem[]
}
  
export interface TodoItem {
  id: string,
  title: string,
  completed: boolean,
  priority: number
}