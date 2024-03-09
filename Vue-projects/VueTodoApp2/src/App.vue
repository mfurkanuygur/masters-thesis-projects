<template>
  <main>
    <h1>Erciyes University</h1>
    <h2>Master Project</h2>
    <h3>Todo App With Vue</h3>
    <div class="todo-form">
      <EditForm
        v-if="isEdit"
        :editTodo="editTodo"
        :isEdit="isEdit"
        @changeIsEdit="handleChangeEdit"
      />
      <Form v-else @addNewTodo="handleAddTodo" />
    </div>
    <div v-for="todo in todos" :key="todo.id" class="todos">
      <SingleTodo
        :todo="todo"
        @deleteTodo="handleDelete"
        @completeTodo="handleComplete"
        @editTodo="handleEdit"
        :isEdit="isEdit"
      />
    </div>
  </main>
</template>

<script>
import Form from "./components/Form.vue";
import SingleTodo from "./components/SingleTodo.vue";
import EditForm from "./components/EditForm.vue";
export default {
  data() {
    return {
      todos: [],
      isEdit: false,
      editTodo: null,
    };
  },
  components: { Form, SingleTodo, EditForm },
  methods: {
    handleAddTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
    handleDelete(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    handleComplete(id) {
      let completeTodo = this.todos.find((todo) => todo.id == id);
      completeTodo.isComplete = !completeTodo.isComplete;
    },
    handleEdit(id) {
      this.isEdit = !this.isEdit;
      this.editTodo = this.todos.find((todo) => todo.id == id);
    },
    handleChangeEdit(state) {
      this.isEdit = state;
    },
  },
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
