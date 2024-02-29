<template>
  <div>
    <h1>{{ todo.name }}</h1>
    <p>{{ todo.id }}</p>
    <p>{{ todo.isComplete }}</p>
    <button @click="deleteTodo">delete</button>
    <button @click="completeTodo">done</button>
    <button @click="editTodo" :disabled="isEdit">edit</button>
  </div>
</template>

<script>
export default {
  props: ["todo", "isEdit"],
  methods: {
    deleteTodo() {
      this.$emit("deleteTodo", this.todo.id);
    },
    completeTodo() {
      this.$emit("completeTodo", this.todo.id);
    },
    editTodo() {
      this.$emit("editTodo", this.todo.id);
    },
  },
};
</script>

<style></style>
