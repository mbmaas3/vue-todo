import { defineStore } from 'pinia'
import { ref } from 'vue';
import { type TodoLists, type TodoItem, type TodoList } from '../interfaces/types';

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<TodoList>({
      headline : "Programming tasks",
      items: [
      { id: "1", title: 'Code like a wizard', completed: true , priority : 0},
      { id: "2", title: 'Whip up a magical dinner', completed: true, priority : 1},
      { id: "3", title: 'Conquer the bug kingdom', completed: false, priority : 2},
      { id: "4", title: 'Map out epic adventures for next week', completed: false, priority : 3},
      { id: "5", title: 'Transform spaghetti code into gourmet pasta', completed: true, priority : 4},
      { id: "6", title: 'Embark on a grocery quest', completed: false, priority : 5},
      { id: "7", title: 'Create the ultimate project scroll', completed: false, priority : 6},
      { id: "8", title: 'Assist the little wizards with their homework spells', completed: false, priority : 7},
      { id: "9", title: 'Battle the pull request trolls', completed: true, priority : 8 },
      { id: "10", title: 'Tidy up the enchanted workspace', completed: false , priority : 9} ]})
   
    const addTodo = (title: string, priority: number) => {
      const todosTemp = todos.value.items;

      todosTemp.push({
            id: crypto.randomUUID(),
            title: title,
            completed: false,
            priority:priority
        });

        todos.value.items = todosTemp.sort((priority1,priority2) => priority1.priority - priority2.priority);
    }

    const findItemById = (id: string) => {  
      return todos.value.items.find(todo => todo.id === id);
    };

    const deleteTodoById = (id: string) => {
      todos.value.items = todos.value.items.filter(todo => todo.id !==id);
    };

    const setTodoToCompletedById = (id: string) => {
      const todo = findItemById(id);
      if(todo)
        todo.completed = !todo.completed;
    }

  return {
    todos,
    addTodo,deleteTodoById,setTodoToCompletedById 
  }
})