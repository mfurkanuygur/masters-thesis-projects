<template>
  <form>
    <input type="text" placeholder="edit a todo" v-model="this.editTodo.name" />
    <button @click.prevent="saveTodo">save Todo</button>
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

<style></style>
