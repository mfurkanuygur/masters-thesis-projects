<template>
  <main>
    <Form @addTodo="addNewTodo" />
    <ul v-for="todo in allTodos" :key="todo.id">
      <SingleTodo :todo="todo" />
    </ul>
  </main>
</template>

<script setup>
import Form from "./components/Form.vue";
import SingleTodo from "./components/SingleTodo.vue";

let allTodos = [];
const addNewTodo = (newTodo) => {
  // allTodos = [newTodo, ...allTodos];
  console.log(newTodo);
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
