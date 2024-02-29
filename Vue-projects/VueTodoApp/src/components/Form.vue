<template>
  <form @submit.prevent="$emit('addTodo', newTodo)">
    <input type="text" v-model="todoName" />
    <button @click="add">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const todoName = ref();
const newTodo = {
  id: self.crypto.randomUUID(),
  todoName: todoName,
  isComplete: false,
};
const add = () => {

  console.log(newTodo.todoName);
};
</script>

<style></style>
