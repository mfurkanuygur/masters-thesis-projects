<template>
  <form>
    <input type="text" placeholder="Enter a city" v-model="enterCity" />
    <button @click.prevent="search">search</button>
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

<style></style>
