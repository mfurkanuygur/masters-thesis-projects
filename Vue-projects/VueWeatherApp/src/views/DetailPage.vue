<template>
  <div>
    <div class="daily-weather">
      <div v-for="weather in dailyWeathers" :key="weather.id">
        <OneDayDetail :weather="weather" />
      </div>
    </div>
    <div class="daily-weather">
      <div v-for="weather in remainingDays" :key="weather.id">
        <DailyDetail :weather="weather" />
      </div>
    </div>
    <button @click="test">asd</button>
    <router-link :to="{ path: `/` }">
      <!-- <router-link :to="{ name: 'detailPage', params: { id: cityData?.id } }"> -->
      <button className="button-link">Go home</button>
    </router-link>
  </div>
</template>

<script>
import OneDayDetail from "../components/OneDayDetail.vue";
import DailyDetail from '../components/DailyDetail.vue'
import { getCityDetailData } from "../request/request";
import { dailyWeathers, remainingDays } from "../chunked/chunked";

export default {
  props: ["id"],
  components: { OneDayDetail,DailyDetail },
  data() {
    return {
      cityDetails: null,
      dailyWeathers: null,
      remainingDays: null,
    };
  },
  methods: {
    test() {
      console.log(this.remainingDays);
    },
  },
  mounted() {
    getCityDetailData(this.id).then((data) => {
      this.dailyWeathers = dailyWeathers(data)[0];
      this.remainingDays = remainingDays(data);
    });
  },
};
</script>

<style scoped>
.daily-weather {
  display: flex;
}
</style>
