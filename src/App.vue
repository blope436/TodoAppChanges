<script setup>

import Title from "./components/Title.vue"

import Lists from "./components/Lists.vue"

</script>

<template>
<div class="min-h-screen bg-green-700">
  <div class="container flex flex-col mx-auto space-y-9 pt-9">
<Title />

<div class="flex justify-around">
 <Lists />
 <Lists isDone />
  
    </div>
  </div>
</div>
</template>
