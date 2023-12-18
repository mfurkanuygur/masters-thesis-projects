function* chunked(arr, size) {
    for (let i = 0; i < arr?.length; i += size) {
        yield arr.slice(i, i + size);
    }
}

const EachDayWeather = ({ cityDetail }) => {

    const dateNow = new Date().toJSON().slice(0, 10);
    const dailyWeathers = [...chunked(cityDetail?.list, 8)];
    const remainingDayData = cityDetail?.list.filter((item) => item.dt_txt.slice(0, 10) !== dateNow);
    const remainingDays = [...chunked(remainingDayData, 8)];

    // let min_temp = [...cityDetail].sort((a, b) => a.main.temp_min - b.main.temp_min);
    // let max_temp = [...cityDetail].sort((a, b) => b.main.temp_max - a.main.temp_max);
    // const day = new Date(cityDetail[0].dt_txt).getDay();
    // let dayName;
    // switch (day) {
    //     case 0:
    //         dayName = "Pazar";
    //         break;
    //     case 1:
    //         dayName = "Pazartesi";
    //         break;
    //     case 2:
    //         dayName = "Salı";
    //         break;
    //     case 3:
    //         dayName = "Çarşamba";
    //         break;
    //     case 4:
    //         dayName = "Perşembe";
    //         break;
    //     case 5:
    //         dayName = "Cuma";
    //         break;
    //     case 6:
    //         dayName = "Cumartesi";
    //         break;
    // }
    return (
        <div className="col p-1">
            <div className="row cardParent p-3">
                <h3>
                    Bugün <span className="text-decoration-underline">{cityDetail?.city.name}</span> Hava Durumu
                </h3>
                {dailyWeathers[0]?.map((weather, i) => (
                    <div className="card bg-transparent border-0 p-3" key={i}>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            alt={weather.weather[0].description}
                        />
                        <div className="card-body">
                            <div className="card-title">{Math.floor(weather.main.temp)}°C</div>
                            <div className="card-text">{weather.dt_txt.slice(11).slice(0, 5)}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="row mt-3">
                {remainingDays.map((weather, i) => (
                    <DailyWeather key={i} weather={weather} />
                ))}
            </div> */}
        </div>
    )
}

export default EachDayWeather