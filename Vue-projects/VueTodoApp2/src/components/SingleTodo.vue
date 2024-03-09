<template>
  <div class="todo-container" :class="{ active: todo.isComplete }">
    <p class="todo-name" :class="{ done: todo.isComplete }">{{ todo.name }}</p>
    <div class="todo-buttons">
      <button class="todo-button" @click="deleteTodo">
        <i class="fa-solid fa-trash-can fa-xl"></i>
      </button>
      <button
        class="todo-button"
        :class="{ tick: todo.isComplete }"
        @click="completeTodo"
      >
        <i class="fa-solid fa-circle-check fa-xl"></i>
      </button>
      <button
        class="todo-button"
        :class="{ disable: isEdit }"
        @click="editTodo"
        :disabled="isEdit"
      >
        <i class="fa-solid fa-pen fa-xl"></i>
      </button>
    </div>
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

<style scoped>
.todo-container {
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0;
  border: 2px solid gray;
  border-left: 10px solid gray;
  transition: 0.3s ease;
}
.todo-name {
  color: gray;
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  transition: 0.3s ease;
  margin-left: 20px;
}
.active {
  border: 2px solid darkblue;
  border-left: 10px solid darkblue;
}
.done {
  color: darkblue;
}
.todo-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}
.todo-button {
  padding: 10px;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease;
  color: gray;
}
.todo-button:hover {
  background-color: darkblue;
  color: white;
}
.tick {
  color: green;
}
.disable {
  color: gray;
}
.disable:hover {
  color: gray;
  background-color: none;
}

@media (max-width:768px) {
  .todo-buttons{
    flex-direction: column;
  }
}
</style>
