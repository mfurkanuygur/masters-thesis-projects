<template>
  <form>
    <input type="text" placeholder="edit a todo" v-model="this.editTodo.name" />
    <button class="form-button" @click.prevent="saveTodo">
      <i class="fa-solid fa-floppy-disk fa-xl icon"></i>
    </button>
  </form>
</template>

<script>
export default {
  props: ["editTodo", "isEdit"],
  data() {
    return {
      editValue: this.editTodo.name,
    };
  },
  methods: {
    saveTodo() {
      console.log(this.isEdit);
      this.$emit("changeIsEdit", !this.isEdit);
    },
  },
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
.form-button {
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
</style>
