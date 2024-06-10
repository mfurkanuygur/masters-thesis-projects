<template>
  <main>
    <h1 className="main-title">Weather App with Vue</h1>
    <EnterForm :cityName="cityName" @searchCity="handleSearch" />
    <DisplayLocation
      v-if="cityDatas"
      :citySummaryData="cityDatas[0]"
      :cityDetailData="cityDatas[1]"
    />
    <Loading v-else />
  </main>
</template>

<script>
import EnterForm from "../components/EnterForm.vue";
import Loading from "../components/Loading.vue";
import DisplayLocation from "../components/DisplayLocation.vue";

import { getApiData } from "../request/request";

export default {
  components: { EnterForm, DisplayLocation, Loading },
  data() {
    return {
      cityName: "Kayseri",
      cityDatas: null,
    };
  },
  methods: {
    handleSearch(newCity) {
      this.cityName = newCity;
      getApiData(this.cityName).then((data) => {
        this.cityDatas = data;
      });
    },
  },
  mounted() {
    getApiData(this.cityName).then((data) => {
      this.cityDatas = data;
    });
  },
};
</script>
