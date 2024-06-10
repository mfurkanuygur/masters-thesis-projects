<template>
  <div className="container" key="{{citySummaryData?.id}}">
    <div className="main-summary">
      <div className="city-summary">
        <div class="card-title">
          <img
            class="weather-img"
            :src="
              'https://openweathermap.org/img/wn/' +
              citySummaryData.weather[0].icon +
              '@2x.png'
            "
            alt=""
          />
          <p className="weather-description">
            {{ citySummaryData?.weather[0].description }}
          </p>
        </div>
        <h1>{{ citySummaryData?.name }}</h1>
        <p>Chance of rain: {{ citySummaryData?.main?.humidity }}%</p>
        <h1>{{ Math.floor(citySummaryData?.main?.temp) }}°C</h1>
      </div>
      <div className="city-summary-data">
        <div class="card">
          <div className="sub-card">
            <div className="sub-card-title">
              <img :src="feelslike" alt="feelslike" :style="'width: 25px'" />
              <p>feels like</p>
            </div>
            <p>{{ Math.floor(citySummaryData?.main.feels_like) }}°C</p>
          </div>
          <div className="sub-card">
            <div className="sub-card-title">
              <img :src="humidity" alt="humidity" :style="'width: 20px'" />
              <p>humidity</p>
            </div>
            <p>{{ citySummaryData?.main.humidity }}%</p>
          </div>
        </div>
        <div class="card">
          <div className="sub-card">
            <div className="sub-card-title">
              <img :src="mintemp" alt="mintemp" :style="'width: 20px'" />
              <p>min temp</p>
            </div>
            <p>{{ Math.floor(citySummaryData?.main.temp_min) }}°C</p>
          </div>
          <div className="sub-card">
            <div className="sub-card-title">
              <img :src="maxtemp" alt="maxtemp" :style="'width: 20px'" />
              <p>max temp</p>
            </div>
            <p>{{ Math.ceil(citySummaryData?.main.temp_max) }}°C</p>
          </div>
        </div>
      </div>
    </div>
    <DetailPage :cityDetails="cityDetailData" />
  </div>
</template>

<script>
import DetailPage from "../views/DetailPage.vue";
import feelslike from "../assets/feelslike.png";
import humidity from "../assets/humidity.png";
import mintemp from "../assets/mintemp.png";
import maxtemp from "../assets/maxtemp.png";
export default {
  components: { DetailPage },
  props: ["citySummaryData", "cityDetailData"],
  data() {
    return {
      feelslike: feelslike,
      humidity: humidity,
      mintemp: mintemp,
      maxtemp: maxtemp,
    };
  },
};
</script>
