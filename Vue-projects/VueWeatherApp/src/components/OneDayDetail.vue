<template>
  <div className="today-main">
    <div className="today-card">
      <div className="sub-card-title">
        <img :src="clock" alt="clock" :style="'width: 20px'" />
        {{ this.weather?.dt_txt?.slice(11).slice(0, 5) }}
      </div>
      <div className="today-card-header">
        <img
          :src="`https://openweathermap.org/img/wn/${this.weather?.weather[0].icon}.png`"
          :alt="`${weather.weather[0].description}`"
        />
      </div>
      <div className="today-card-body">
        <div className="card-title">
          {{ Math.floor(this.weather?.main.temp) }}°C
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clock from "../assets/clock.png";
export default {
  props: ["weather"],
  data() {
    return {
      clock: clock,
    };
  },
};
</script>