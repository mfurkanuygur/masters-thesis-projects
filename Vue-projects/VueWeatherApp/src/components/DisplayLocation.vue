<template>
  <div className="card" key="cityData?.id">
    <div className="card-header">
      <div>
        <h1>{{ cityData?.name }}</h1>
        <p>Chance of rain: {{ cityData?.main?.humidity }}%</p>
        <h2>{{ Math.floor(cityData?.main?.temp) }}°C</h2>
      </div>
      <div className="weather-status">
        <!-- <img className='weather-img' src={{
          `https://openweathermap.org/img/wn/${cityData?.weather[0]?.icon}@2x.png`
        }}
        alt="" /> -->
        <img
          class="weather-img"
          :src="
            'https://openweathermap.org/img/wn/' +
            cityData.weather[0].icon +
            '@2x.png'
          "
          alt=""
        />
        <p className="weather-description">
          {{ cityData?.weather[0].description }}
        </p>
      </div>
    </div>

    <div className="card-body">
      <div className="card-content">
        <div className="content-title">
          <i className="fa-solid fa-street-view"></i>
          <p>feels like:</p>
        </div>
        <p class="content-text">
          {{ Math.floor(cityData?.main.feels_like) }}°C
        </p>
      </div>
      <div className="card-content">
        <div className="content-title">
          <i className="fa-solid fa-temperature-low"></i>
          <p>Min Temp:</p>
        </div>
        <p class="content-text">{{ Math.floor(cityData?.main.temp_min) }}°C</p>
      </div>
      <div className="card-content">
        <div className="content-title">
          <i className="fa-solid fa-temperature-high"></i>
          <p>Max Temp:</p>
        </div>
        <p class="content-text">{{ Math.ceil(cityData?.main.temp_max) }}°C</p>
      </div>
      <div className="card-content">
        <div className="content-title">
          <i className="fa-solid fa-droplet"></i>
          <p>Humidity:</p>
        </div>
        <p class="content-text">{{ cityData?.main.humidity }}%</p>
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

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.458);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
  border: 1px solid rgba(255, 255, 255, 0.57);
  width: 50%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  text-transform: capitalize;
  padding: 30px;
}

.card-header {
  width: 100%;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.weather-status {
  text-align: center;
}
.card-text {
  display: flex;
  gap: 5px;
  align-items: center;
  font-weight: bold;
  font-size: 17px;
}

@media (max-width: 1024px) {
  main {
    gap: 20px;
    padding: 20px;
    height: max-content;
  }

  form {
    width: 100%;
  }

  .card {
    width: 75%;
    gap: 20px;
    width: 100%;
    height: auto;
  }

  .card-header {
    flex-direction: column-reverse;
    text-align: center;
    gap: 20px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .card-content {
    width: 100%;
  }

  .content-title {
    justify-content: center;
  }
}

.card-body {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-content {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.content-title {
  display: flex;
  align-items: center;
  gap: 5px;
}

.content-text {
  font-weight: bold;
  font-size: 18px;
}
</style>
