<template>
  <div className="today-main">
    <div className="today-card">
      <div className="card-text">
        <i className="fa-regular fa-clock"></i>
        {{ weather?.dt_txt.slice(11).slice(0, 5) }}
      </div>
      <div className="today-card-header">
        <img
          :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`"
          :alt="`${weather.weather[0].description}`"
        />
      </div>
      <div className="today-card-body">
        <div className="card-title">{{ Math.floor(weather?.main.temp) }}°C</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weather"],
  data() {
    return {};
  },
  // mounted(){
  //   console.log(this.weather)
  // }
};
</script>

<style scoped>
.today-main {
  background: rgba(255, 255, 255, 0.458);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
  border: 1px solid rgba(255, 255, 255, 0.57);
  padding: 30px;
  text-align: center;
}
</style>
