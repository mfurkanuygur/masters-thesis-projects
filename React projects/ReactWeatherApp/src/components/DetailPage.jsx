import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCityDetailData } from "../request/request"
import EachDayWeather from "./EachDayWeather"
import Loading from "./Loading"



const DetailPage = () => {
  const { id } = useParams()
  const [cityDetail, setCityDetail] = useState()

  useEffect(() => {
    getCityDetailData(id).then(data => setCityDetail(data))
  }, [id])

  return (
    <div className="detail-main-container">
      {cityDetail ? (
        <>
          <h1>{cityDetail?.city?.name}</h1>
          <EachDayWeather cityDetail={cityDetail} />
          <div className="button-container"><Link to={`/`}><button  className="button-link">Go Home</button></Link></div>
        </>
      ) : <Loading />}
    </div >
  )
}

export default DetailPage