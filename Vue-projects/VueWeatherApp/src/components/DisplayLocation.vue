<template>
  <div className="card" key="cityData?.id">
    <div className="card-header">
      <div>
        <h2>{{ cityData?.name }}</h2>
        <p>Chance of rain: {{ cityData?.main?.humidity }}%</p>
        <h1>{{ Math.floor(cityData?.main?.temp) }}°C</h1>
      </div>
      <div className="weather-status">
        <!-- <img className='weather-img' src={{`https://openweathermap.org/img/wn/${cityData?.weather[0]?.icon}@2x.png`}} alt="" /> -->
        <p className="weather-description">
          {{ cityData?.weather[0].description }}
        </p>
      </div>
    </div>

    <div className="card-body">
      <div className="center-item">
        <div className="item-title">
          <i className="fa-solid fa-street-view"></i>
          <p>feels like:</p>
        </div>
        <p>{{ Math.floor(cityData?.main.feels_like) }}°C</p>
      </div>
      <div className="center-item">
        <div className="item-title">
          <i className="fa-solid fa-temperature-low"></i>
          <p>Min Temp:</p>
        </div>
        <p>{{ Math.floor(cityData?.main.temp_min) }}°C</p>
      </div>
      <div className="center-item">
        <div className="item-title">
          <i className="fa-solid fa-temperature-high"></i>
          <p>Max Temp:</p>
        </div>
        <p>{{ Math.ceil(cityData?.main.temp_max) }}°C</p>
      </div>
      <div className="center-item">
        <div className="item-title">
          <i className="fa-solid fa-droplet"></i>
          <p>Humidity:</p>
        </div>
        <p>{{ cityData?.main.humidity }}%</p>
      </div>
    </div>
    <div className="card-footer">
      <router-link :to="{ path: `/${cityData?.id}` }">
        <!-- <router-link :to="{ name: 'detailPage', params: { id: cityData?.id } }"> -->
        <button className="button-link">See More Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cityData"],
  data() {
    return {};
  },
};
</script>

<style></style>
