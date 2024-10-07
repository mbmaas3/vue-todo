export interface TodoList {
  items: TodoItem[]
}
  
export interface TodoItem {
  id: string,
  title: string,
  completed: boolean
}