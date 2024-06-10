<template>
  <div class="other-day">
    <p>{{ dayName }}</p>
    <div class="other-day-text">
      <p class="text">
        <img :src="mintemp" alt="mintemp" :style="'width: 20px'" />
        {{ Math.floor(min_temp[0].main.temp_min) }}°C
      </p>
      /
      <p class="text">
        {{ Math.floor(max_temp[0].main.temp_max) }}°C
        <img :src="maxtemp" alt="maxtemp" :style="'width: 20px'" />
      </p>
    </div>
  </div>
</template>

<script>
import mintemp from "../assets/mintemp.png";
import maxtemp from "../assets/maxtemp.png";
export default {
  props: ["weather"],
  data() {
    return {
      mintemp: mintemp,
      maxtemp: maxtemp,
      min_temp: [...this.weather].sort(
        (a, b) => a.main.temp_min - b.main.temp_min
      ),
      max_temp: [...this.weather].sort(
        (a, b) => b.main.temp_max - a.main.temp_max
      ),
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