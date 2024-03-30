import { useEffect, useState } from 'preact/hooks'
import OneDayDetail from "../components/OneDayDetail";
import DailyDetail from "../components/DailyDetail";
import { getCityDetailData } from '../requests/request';
import { Link } from 'preact-router/match';

import { dailyWeathers, remainingDays } from "../chunked/chunked";
import Loading from "../components/Loading"

const DetailPage = (props) => {
    const [cityDetail, setCityDetail] = useState()

    useEffect(() => {
        getCityDetailData(props.id).then(data => setCityDetail(data))
    }, [props.id])

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
            <div className='button-link' >
                <Link href={`/`}>
                    <button>Go home</button>
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