<template>
  <form>
    <input type="text" placeholder="Enter a location!" v-model="enterCity" />
    <button @click.prevent="search" type="submit">Search</button>
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
