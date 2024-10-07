import { defineStore } from 'pinia'
import { ref } from 'vue';
import type { TodoItem, TodoList } from '../interfaces/types';

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<TodoList>({ items: [
      { id: '1', title: 'Code like a wizard', completed: true },
      { id: '2', title: 'Whip up a magical dinner', completed: false },
      { id: '3', title: 'Conquer the bug kingdom', completed: false },
      { id: '4', title: 'Map out epic adventures for next week', completed: false },
      { id: '5', title: 'Transform spaghetti code into gourmet pasta', completed: true },
      { id: '6', title: 'Embark on a grocery quest', completed: false },
      { id: '7', title: 'Create the ultimate project scroll', completed: false },
      { id: '8', title: 'Assist the little wizards with their homework spells', completed: false },
      { id: '9', title: 'Battle the pull request trolls', completed: true },
      { id: '10', title: 'Tidy up the enchanted workspace', completed: false },
      { id: '11', completed: false }
    ] })

    const addTodo = (title: string) => {
        todos.value.items.push({
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        });
    }

  return {
    todos,
    addTodo
  }
})
