<template>
    <div class="rounded-lg border border-green-500 px-3 py-3 shadow-sm bg-pink-200">
        <div class="min-w-0 flex-1">
            <p :class="['text-sm font-medium text-gray-900', { 'line-through': completed === true}]">{{ title }}</p>
            <p class="truncate text-sm text-gray-500" v-if="completed">Completed 🎉</p>
        </div>
    </div>
</template>
<script setup lang='ts'>
import type { TodoItem } from '@/interfaces/types';

const { id = '', title = 'No title! 😭', completed = false } = defineProps<TodoItem>()

</script>
<style>
</style>