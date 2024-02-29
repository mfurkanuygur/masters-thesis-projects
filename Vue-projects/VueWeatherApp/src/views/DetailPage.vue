<template>
  <div class="about">
    <MoreDetailLocation />
    {{ this.id }}
    <router-link :to="{ path: `/` }">
      <!-- <router-link :to="{ name: 'detailPage', params: { id: cityData?.id } }"> -->
      <button className="button-link">Go home</button>
    </router-link>
  </div>
</template>

<script>
import MoreDetailLocation from "../components/MoreDetailLocation.vue";
import { getCityDetailData } from "../request/request";

export default {
  props: ["id"],
  components: { MoreDetailLocation },
  data() {
    return {
      detailsCity: null,
    };
  },
  mounted() {
    getCityDetailData(this.id).then((data) => {
      (this.detailsCity = data), console.log(data);
    });
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
