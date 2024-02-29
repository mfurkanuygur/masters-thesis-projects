<template>
  <main>
    <EnterForm :cityName="cityName" @searchCity="handleSearch" />
    <DisplayLocation :cityData="cityData" />
  </main>
</template>

<script>
import EnterForm from "../components/EnterForm.vue";
import DisplayLocation from "../components/DisplayLocation.vue";
import { getApiData } from "../request/request";

export default {
  components: { EnterForm, DisplayLocation },
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
        (this.cityData = data), console.log(data);
      });
    },
  },
  mounted() {
    getApiData(this.cityName).then((data) => {
      (this.cityData = data), console.log(data);
    });
  },
};
</script>
