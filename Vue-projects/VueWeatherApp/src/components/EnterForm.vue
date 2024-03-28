<template>
  <form>
    <input type="text" placeholder="Enter a city" v-model="enterCity" />
    <button @click.prevent="search" type="submit">search</button>
  </form>
</template>

<script>
export default {
  props: ["cityName"],
  data() {
    return {
      enterCity: null,
    };
  },

  methods: {
    search() {
      this.$emit("searchCity", this.enterCity);
    },
  },
};
</script>

<style scoped>
form {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

input {
  color: rgb(168, 168, 168);
  width: 100%;
  padding: 15px;
  border: 1px solid white;
  border-radius: 10px 0 0 10px;
  outline: none;
  transition: 0.3s ease;
  font-weight: bold;
}

input:focus {
  color: black;
  background-color: white;
}

button[type="submit"] {
  border-radius: 0 10px 10px 0;
}
</style>
