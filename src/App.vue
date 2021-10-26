<script setup>
import {ref, computed} from "vue";

const newTodos = ref("");

const todo = ref([]);

const pending = computed (() => {
  return todo.value.filter((todos) => !todos.done)
});

const completed = computed (() => {
  return todo.value.filter((todos) => todos.done)
});

const addTodos = () => {
  if (newTodos.value.trim())
  {
    todo.value.push({
      id: todo.value.length,
      content: newTodos.value,
      done: false

    });
    newTodos.value = "";
  }
};

const change = (id) => {
  const todos = todo.value.find(todos => todos.id === id);
  todos.done = !todos.done;
};
</script>

<template>
<div class="min-h-screen bg-green-700">
  <div class="container flex flex-col mx-auto space-y-9 pt-9">
<h1 class="pb-5 text-7xl font-thin tracking-tight text-center text-green-200">🚀 Todo Application</h1>
<input @change="addTodos" v-model="newTodos" type="text" class="px-5 py-3 text-xl text-center bg-blue-800 rounded-lg" placeholder="Enter Item ToDo" />
<div class="flex justify-around">
  <div class="w-1/3">
    <h3 class="text-3xl text-center text-red-500">Pending</h3>
    <ul class="pt-8 space-y-5">
      <li v-for="todos in pending" :key="todos.id" @click="change(todos.id)" class="w-full px-4 py-5 font-bold text-center text-red-900 transition-colors duration-500 bg-purple-400 rounded-lg hover:cursor-pointer hover:bg-red-400 hover:text-indigo-700">
        {{todos.content}}</li>
    </ul>
  </div>
  <div class="w-1/3">
    <h3 class="text-3xl text-center text-yellow-500">Done</h3>
    <ul class="pt-8 space-y-5">
      <li v-for="todos in completed" :key="todos.id" @click="change(todos.id)" class = "w-full px-4 py-5 font-bold text-center text-yellow-900 transition-colors duration-500 bg-yellow-400 rounded-lg hover:cursor-pointer hover:bg-yellow-200 hover:text-purple-400">{{todos.content}}</li>
    </ul>
  </div>
    </div>
  </div>
</div>
</template>
