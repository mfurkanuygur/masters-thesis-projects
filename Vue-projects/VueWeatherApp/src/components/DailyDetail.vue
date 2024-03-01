<template>
  <div className="other-day">
    <h4>{{ dayName }}</h4>
    <div className="other-day-text">
      <p className="">
        <i className="fa-solid fa-temperature-low"></i>
        {{ Math.floor(min_temp[0].main.temp_min) }}°C
      </p>
      <span>/</span>
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
  computed() {
    const day = new Date(this.weather[0].dt_txt).getDay();
    switch (day) {
      case 0:
        this.dayName = "Sunday";
        console.log(this.dayName);
        break;
      case 1:
        this.dayName = "Monday";
        console.log(this.dayName);

        break;
      case 2:
        this.dayName = "Tuesday";
        console.log(this.dayName);

        break;
      case 3:
        this.dayName = "Wednesday";
        console.log(this.dayName);

        break;
      case 4:
        this.dayName = "Thursday";
        console.log(this.dayName);

        break;
      case 5:
        this.dayName = "Friday";
        console.log(this.dayName);
        break;
      case 6:
        this.dayName = "Saturday";
        console.log(this.dayName);
        break;
    }
  },
};
</script>

<style></style>
