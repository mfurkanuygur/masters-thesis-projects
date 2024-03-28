<template>
  <div className="other-day">
    <h4>{{ dayName }}</h4>
    <div className="other-day-text">
      <p className="text">
        <i className="fa-solid fa-temperature-low"></i>
        {{ Math.floor(min_temp[0].main.temp_min) }}°C
      </p>
      /
      <p>
        {{ Math.floor(max_temp[0].main.temp_max) }}°C
        <i className="fa-solid fa-temperature-high"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weather"],
  data() {
    return {
      min_temp: [...this.weather].sort(
        (a, b) => a.main.temp_min - b.main.temp_min
      ),
      max_temp: [...this.weather].sort(
        (a, b) => b.main.temp_max - a.main.temp_max
      ),
      dayName: null,
    };
  },
  computed: {
    dayName() {
      const day = new Date(this.weather[0].dt_txt).getDay();
      switch (day) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.other-day {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.458);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
  border: 1px solid rgba(255, 255, 255, 0.57);
  padding: 30px;
  text-align: center;
}

.other-day-text {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 10px;
}

.text {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
