<template>
  <form>
    <input type="text" placeholder="Enter a todo" v-model="name" />
    <button @click.prevent="addTodo">Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addTodo(e) {
      this.$emit("addNewTodo", {
        id: self.crypto.randomUUID(),
        name: this.name,
        isComplete: false,
      });
      this.name = "";
    },
  },
};
</script>

<style></style>
