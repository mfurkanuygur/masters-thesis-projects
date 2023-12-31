import { useEffect, useState } from "preact/hooks"
// import { useParams } from "preact/hooks"
import { Link } from 'preact-router/match';
import { getCityDetailData } from "../request/request"
import EachDayWeather from "./EachDayWeather"
import Loading from "./Loading"

const DetailPage = (props) => {
  // const { id } = useParams()
  const [cityDetail, setCityDetail] = useState()

  useEffect(() => {
    getCityDetailData(props.id).then(data => setCityDetail(data))
  }, [props.id])

  return (
    <div className="detail-main-container">
      {cityDetail ? (
        <>
          <h1>{cityDetail?.city?.name}</h1>
          <EachDayWeather cityDetail={cityDetail} />
          <div className="button-container"><Link href={`/`}><button className="button-link">Go Home</button></Link></div>
        </>
      ) : <Loading />}
    </div >
  )
}

export default DetailPage