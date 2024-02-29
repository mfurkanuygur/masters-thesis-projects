<template>
  <main>
    <div>
      <EditForm
        v-if="isEdit"
        :editTodo="editTodo"
        :isEdit="isEdit"
        @changeIsEdit="handleChangeEdit"
      />
      <Form v-else @addNewTodo="handleAddTodo" />

      <div v-for="todo in todos" :key="todo.id">
        <SingleTodo
          :todo="todo"
          @deleteTodo="handleDelete"
          @completeTodo="handleComplete"
          @editTodo="handleEdit"
          :isEdit="isEdit"
        />
      </div>
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
