import OneDayDetail from "../components/OneDayDetail";
import DailyDetail from "../components/DailyDetail";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCityDetailData } from "../request/request";
import { dailyWeathers, remainingDays } from "../chunked/chunked";
import Loading from "../components/Loading"

// function* chunked(arr, size) {
//   for (let i = 0; i < arr?.length; i += size) {
//     yield arr.slice(i, i + size);
//   }
// }

const DetailPage = () => {
  const { id } = useParams()
  const [cityDetail, setCityDetail] = useState()

  useEffect(() => {
    getCityDetailData(id).then(data => setCityDetail(data))
  }, [id])

  const dateNow = new Date().toJSON().slice(0, 10);
  // const dailyWeathers = [...chunked(cityDetail?.list, 8)];
  // const remainingDayData = cityDetail?.list.filter((item) => item.dt_txt.slice(0, 10) !== dateNow);
  // const remainingDays = [...chunked(remainingDayData, 8)];
  return (
    <div className="detail-page">
      <h1 className="detail-title">today weather </h1>
      {cityDetail &&
        <div className="detail-container">
          <div className="today-container">
            {dailyWeathers(cityDetail)[0]?.map((weather, i) => (
              <OneDayDetail weather={weather} key={i} />
            ))}
          </div>
          <div className="remain-container">
            {remainingDays(cityDetail).map((weather, i) => (
              <DailyDetail key={i} weather={weather} />
            ))}
          </div>
        </div> ||
        <Loading />
      }
      <div  className='button-link'>
        <Link to={`/`}>
          <button >Go home</button>
        </Link>
      </div>
      {/* <div className="today-container">
        {dailyWeathers(cityDetail)[0]?.map((weather, i) => (
          <OneDayDetail weather={weather} key={i} />
        ))}
      </div>
      <div className="remain-container">
        {remainingDays(cityDetail).map((weather, i) => (
          <DailyDetail key={i} weather={weather} />
        ))} */}
    </div>
  )
}

export default DetailPage