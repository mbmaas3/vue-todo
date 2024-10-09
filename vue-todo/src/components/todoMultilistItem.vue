<template>
    <div :class="['flex-h rounded-lg border px-3 py-3 shadow-sm', 
                  completed ? 'border-green-500 bg-green-200' : 'border-pink-500 bg-yellow-200']">  
    <div class="flex justify-between items-center">  
        <div class="min-w-5 flex space-x-2 ml-auto">
            <p :class="'text-sm font-medium text-gray-900'">{{ priority }}</p>
        </div>
            <div class="min-w-0 flex-1">
                <p :class="['text-sm font-medium text-gray-900', { 'line-through': completed === true}]">{{ title }}</p>
                <p class="truncate text-sm text-gray-500" v-if="completed">Completed 🎉</p>
            </div>     
       <div class="min-w-0 flex space-x-2 ml-auto">
            <button>
                <img src="..\assets\checked.png" class="w-6 h-6" @click="markAsCompleted"/>
            </button>       
            <button>
                <img src="..\assets\cross.png" class="w-6 h-6" @click="deleteItem"/>
            </button>    
        </div>
    </div>
    </div>
</template>
<script setup lang='ts'>
import type { TodoItem } from '@/interfaces/types';
import { useTodoStoreList } from '@/stores/todoListStore';

const storeList = useTodoStoreList()
const { id = "", title = 'No title! 😭', completed = false, priority =0 } = defineProps<TodoItem>()

const markAsCompleted = () => {
  //store.setTodoToCompletedById(id); 
}

const deleteItem = () => {
  storeList.deleteTodoById(id); 
}

</script>
<style>
</style>