<template>
 <main>
    <div class="detail-page">
      <h1 className="detail-title">today weather</h1>
      <div v-if="dailyWeathers && remainingDays" class="detail-container">
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
      </div>
      <Loading v-else />
     <div className="button-link">
        <router-link :to="{ path: `/` }">
          <!-- <router-link :to="{ name: 'detailPage', params: { id: cityData?.id } }"> -->
          <button >Go home</button>
        </router-link>
     </div>
    </div>
 </main>
</template>

<script>
import OneDayDetail from "../components/OneDayDetail.vue";
import DailyDetail from "../components/DailyDetail.vue";
import Loading from "../components/Loading.vue";
import { getCityDetailData } from "../request/request";
import { dailyWeathers, remainingDays } from "../chunked/chunked";

export default {
  props: ["id"],
  components: { OneDayDetail, DailyDetail, Loading },
  data() {
    return {
      // cityDetails: null,
      dailyWeathers: null,
      remainingDays: null,
    };
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
.detail-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.detail-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.today-container,
.remain-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

.remain-container {
  background: rgba(255, 255, 255, 0.458);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
  border: 1px solid rgba(255, 255, 255, 0.57);
  padding: 50px;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.detail-title {
  text-transform: capitalize;
  text-align: center;
  font-size: 28px;
  padding: 0;
  margin: 0;
}
.button-link{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
