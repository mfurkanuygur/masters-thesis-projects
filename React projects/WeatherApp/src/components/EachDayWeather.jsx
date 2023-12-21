import OtherDayDetails from "./OtherDayDetails";
import { TodayDetails } from "./TodayDetails";

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


    return (
        <div className="detail-container">
            <div className="today-main-container">
                {dailyWeathers[0]?.map((weather, i) => (
                    <TodayDetails weather={weather} key={i} />
                ))}
            </div>
            <div className="remain-day-container">
                {remainingDays.map((weather, i) => (
                    <OtherDayDetails key={i} weather={weather} />
                ))}
            </div>
        </div>
    )
}

export default EachDayWeather