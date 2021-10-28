<script setup>
import {ref} from 'vue';

import useTodos  from '../composables/useTodos';

const {addTodos} = useTodos();

const newTodos = ref("");

const add = () => {
  if(newTodos.value) {
    addTodos(newTodos.value);
    newTodos.value = "";
  }
};
</script>

<template>
<h1 class="pb-5 text-7xl font-thin tracking-tight text-center text-green-200">
    🚀 Todo Application</h1>
    
    <input @change="add" 

    v-model="newTodos" 
    
    type="text" 
    
    class="px-5 py-3 text-xl text-center bg-blue-800 rounded-lg" 
    
    placeholder="Enter Item ToDo" />

</template>