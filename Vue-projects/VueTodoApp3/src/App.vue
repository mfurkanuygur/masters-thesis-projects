<template>
  <main>
    <h1>Erciyes University</h1>
    <h2>Master Project</h2>
    <h3>Todo App With Vue</h3>
    <TodoForm @handleAdd="handleAdd" class="todo-form" />
    <div v-for="todo in todos" :key="todo.id" class="todos">
      <SingleTodo
        :todo="todo"
        :isEdit="isEdit"
        @handleDelete="handleDelete"
        :state="state"
        @changeState="handleChange"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import TodoForm from "./components/TodoForm.vue";
import SingleTodo from "./components/SingleTodo.vue";

const todos = ref([]);
const state = ref(false);
const handleAdd = (todo) => {
  todos.value = [todo, ...todos.value];
};

const handleDelete = (todoID) => {
  todos.value = todos.value.filter((todo) => todo.id !== todoID);
};

const handleChange = (newState) => {
  state.value = newState;
};
</script>

<style scoped>
main {
  font-family: "Roboto", sans-serif;
  max-width: 500px;
  min-width: 500px;
}
h1,
h2,
h3 {
  text-align: center;
}
.todo-form {
  margin: 20px 0;
}

@media (max-width: 768px) {
  main {
    min-width: 350px;
  }
  .todo-form,
  .todos {
    padding: 0 20px;
  }
}
</style>
