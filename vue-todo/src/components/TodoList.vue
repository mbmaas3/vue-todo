<template>
    <div>
        <h2 class="text-2xl font-bold leading-7 text-gray-900 mt-5 sm:truncate sm:text-3xl sm:tracking-tight">Epic Quest of Daily Tasks!</h2>
        <p class="text-sm font-medium text-gray-500 mb-5">Your quest begins! Crush these tasks and unlock the next level of awesome!</p>
    <div class="flex mb-5">
            <input type="text" name="title" id="title" v-model="title" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3" placeholder="Add new todo" />
            <input type="text" name="priority" id="priority" v-model="priority" class="block w-20 ml-2 rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Prioritet" />
            <button type="button" class="ml-2 rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="addTodo()">Add</button>
        </div>
    <div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TodoItem v-bind="todo" v-for="todo in store.todos.items" :key="todo.id" />
        </div>
    </div> 
    </div>
</template>
<script setup lang='ts'>

import { useTodoStore } from '@/stores/todoStore';
import TodoItem from '@/components/TodoItem.vue';
import { ref } from 'vue';

const store = useTodoStore()
const title = ref<string>('')
const priority = ref<number>(0)

const addTodo = () => {
  store.addTodo(title.value,priority.value)
}

</script>
<style>
</style>