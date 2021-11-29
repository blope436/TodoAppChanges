<script setup>

import useTodos from '../composables/useTodos';

const {pending, completed,change} = useTodos();

defineProps({
    isDone: {
        default: false,
        type: Boolean
    },
});

</script>

<template>
 <div class="w-1/3">
    <h3 class="text-3xl text-center" 
    :class="isDone ? 'text-yellow-300' :  'text-red-500'">
    {{isDone ? 'Done': 'Pending'}}</h3>

    <ul class="pt-8 space-y-5">
      
      <li v-for="todos in (isDone ? completed : pending)" 
      :key="todos.id" 
      @click="change(todos.id)"
       :class="isDone ? 'bg-yellow-500 text-yellow-100 hover:bg-yellow-200' : 'text-red-900 hover:bg-red-400'"
       class="w-full px-4 py-5 font-bold text-center 
        transition-colors duration-500 bg-purple-400 rounded-lg hover:cursor-pointer 
        hover:text-indigo-700">
        {{todos.text}}</li>

    </ul>
  </div>
</template>