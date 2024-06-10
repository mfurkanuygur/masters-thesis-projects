<template>
    <div class="detail-section">
      <h1 className="detail-title">today weather</h1>
      <divs v-if="dailyWeathers && remainingDays" class="detail-container">
        <div class="today-container">
          <div v-for="weather in dailyWeathers" :key="weather.id">
            <OneDayDetail :weather="weather" />
          </div>
        </div>
        <div class="remain-container">
          <div v-for="weather in remainingDays" :key="weather.id">
            <DailyDetail :weather="weather" />
          </div>
        </div>
      </divs>
      <Loading v-else />
    </div>
</template>

<script>
import OneDayDetail from "../components/OneDayDetail.vue";
import DailyDetail from "../components/DailyDetail.vue";
import Loading from "../components/Loading.vue";
import { dailyWeathers, remainingDays } from "../chunked/chunked";

export default {
  props: ["cityDetails"],
  components: { OneDayDetail, DailyDetail, Loading },
  data() {
    return {
      dailyWeathers: null,
      remainingDays: null,
    };
  },
  mounted() {
    this.updateWeatherData();
  },
  watch: {
    cityDetails: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.updateWeatherData();
        }
      },
    },
  },
  methods: {
    updateWeatherData() {
      this.dailyWeathers = dailyWeathers(this.cityDetails)[0];
      this.remainingDays = remainingDays(this.cityDetails);
    },
  },
};
</script>