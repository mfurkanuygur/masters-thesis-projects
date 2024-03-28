<template>
 <main>
    <EnterForm :cityName="cityName" @searchCity="handleSearch" />
    <div v-if="cityData"></div>
    <DisplayLocation v-if="cityData" :cityData="cityData" />
    <Loading v-else/>
 </main>
</template>

<script>
import EnterForm from "../components/EnterForm.vue";
import Loading from "../components/Loading.vue";
import DisplayLocation from "../components/DisplayLocation.vue";

import { getApiData } from "../request/request";

export default {
  components: { EnterForm, DisplayLocation,Loading },
  data() {
    return {
      cityName: "Kayseri",
      cityData: null,
    };
  },
  methods: {
    handleSearch(newCity) {
      this.cityName = newCity;
      getApiData(this.cityName).then((data) => {
        this.cityData = data;
      });
    },
  },
  mounted() {
    getApiData(this.cityName).then((data) => {
      this.cityData = data;
    });
  },
};
</script>
