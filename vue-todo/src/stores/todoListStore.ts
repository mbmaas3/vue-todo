import { defineStore } from 'pinia'
import { ref } from 'vue';
import { type TodoLists, type TodoItem, type TodoList } from '../interfaces/types';

export const useTodoStoreList = defineStore('todoList', () => {
    const todosList = ref<TodoLists>({ items: [
        {headline: "Programming tasks",
          items: [
            { id: "1", title: 'Code like a wizard', completed: true, priority: 0 },
            { id: "2", title: 'Whip up a magical dinner', completed: true, priority: 1 },
            { id: "3", title: 'Conquer the bug kingdom', completed: false,  priority: 2 },
            { id: "4", title: 'Map out epic adventures for next week', completed: false, priority: 3 },
            { id: "5", title: 'Transform spaghetti code into gourmet pasta', completed: true, priority: 4 },
            { id: "6", title: 'Embark on a grocery quest', completed: false, priority: 5 },
            { id: "7", title: 'Create the ultimate project scroll', completed: false, priority: 6 },
            { id: "8", title: 'Assist the little wizards with their homework spells', completed: false, priority: 7 },
            { id: "9", title: 'Battle the pull request trolls', completed: true,  priority: 8 },
            { id: "10", title: 'Tidy up the enchanted workspace', completed: false, priority: 9 }
        ]},       
        {headline: "Important tasks",
          items: [
            { id: "0", title: 'Finish the project', completed: false, priority: 1 },
            { id: "1", title: 'Update the documentation', completed: false, priority: 2 }
        ]}]
    })

    const addTodoList = (title: string, priority: number, headline: string) => {
        const list = findListByHeadline(headline);

        if(list)
        {
            const todosTemp = list.items;
  
            todosTemp.push({
                  id: crypto.randomUUID(),
                  title: title,
                  completed: false,
                  priority:priority
              });
      
              list.items= list.items.sort((priority1,priority2) => priority1.priority - priority2.priority);
        }
        else
        {
            todosList.value.items.push({
                headline : headline,
                items : [{ id: crypto.randomUUID(), title: title, completed: false, priority: priority }]
            })
        }
      }

      const findTodoById = (id: string) => {  
        return findListById(id)?.items.find(todo => todo.id === id);
      };

      const findListByHeadline = (headline: string) => {  
        return todosList.value.items.find(todoList => todoList.headline === headline);
      };

      const findListById = (id: string) => {  
        return todosList.value.items.find(todoList =>
            //some = contains?
            todoList.items.some(todo => todo.id === id)
          );
      };
  
      //Should delete the list if no elements left
      const deleteTodoById = (id: string) => {
        const tempList = findListById(id);
        
        if(tempList)
        {
            tempList.items = tempList.items.filter(todo => todo.id !==id);
            //Replace x (witch equals tempList) with the new templist where todo is deleted
            todosList.value.items = todosList.value.items.map(x => x.headline === tempList.headline ?  x : tempList);
        }
      };
  
      const setTodoToCompletedById = (id: string) => {
        const todo = findTodoById(id)

        if(todo)
          todo.completed = !todo.completed;
      }
  
  return {
    todosList,addTodoList,deleteTodoById,setTodoToCompletedById
  }
})
