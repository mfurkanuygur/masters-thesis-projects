<template>
  <div>
    <div v-if="isEdit">
      <form @submit.prevent="saveTodo" class="edit-form">
        <input type="text" placeholder="Please update your todo!" v-model="todo.name" />
        <button type="submit">
          <i class="fa-solid fa-floppy-disk fa-xl icon"></i>
        </button>
      </form>
    </div>
    <div v-else class="todo-container" :class="{ active: todo.isComplete }">
      <p class="todo-name" :class="{ done: todo.isComplete }">
        {{ todo.name }}
      </p>
      <div class="todo-buttons">
        <button class="todo-button" @click="deleteTodo" aria-label="delete todo">
          <i class="fa-solid fa-trash-can fa-xl"></i>
        </button>
        <button class="todo-button" @click="editTodo" :disabled="state" aria-label="edit todo">
          <i class="fa-solid fa-pen fa-xl"></i>
        </button>
        <button
          class="todo-button"
          @click="completeTodo"
          :class="{ tick: todo.isComplete }"
          aria-label="check todo"
        >
          <i class="fa-solid fa-circle-check fa-xl"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isEdit = ref(false);
const props = defineProps({
  todo: Object,
  state: Boolean,
});

const emit = defineEmits();
const deleteTodo = (todo) => {
  emit("handleDelete", props.todo.id);
};

const completeTodo = (todo) => {
  props.todo.isComplete = !props.todo.isComplete;
};

const editTodo = () => {
  isEdit.value = !isEdit.value;
  emit("changeState", isEdit.value);
};
const saveTodo = () => {
  if (props.todo.name.trim() !== "") {
    isEdit.value = !isEdit.value;
    emit("changeState", isEdit.value);
  }
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
}
.edit-form {
  margin: 50px 0;
}
input {
  padding: 15px;
  width: 100%;
  border-radius: 10px 0 0 10px;
  border: 1px solid gray;
  border-right: none;
  color: gray;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s ease;
}
input:focus {
  border-color: darkblue;
  color: darkblue;
  box-shadow: 0px 0px 15px 0px darkblue;
  -webkit-box-shadow: 0px 0px 15px 0px darkblue;
  -moz-box-shadow: 0px 0px 15px 0px darkblue;
}
button {
  background-color: darkblue;
  color: white;
  outline: none;
  border: 1px solid darkblue;
  border-radius: 0px 10px 10px 0;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s ease;
  cursor: pointer;
}
.icon:hover {
  animation: rotation 2s linear infinite;
}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

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
  font-size: 20px;
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

@media (max-width: 768px) {
  .todo-buttons {
    flex-direction: column;
  }
}
</style>
