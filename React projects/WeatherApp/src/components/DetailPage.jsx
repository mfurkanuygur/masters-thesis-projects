import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCityDetailData } from "../request/request"
import EachDayWeather from "./EachDayWeather"



const DetailPage = () => {
  const { id } = useParams()
  const [cityDetail, setCityDetail] = useState()

  useEffect(() => {
    getCityDetailData(id).then(data => setCityDetail(data))
  }, [id])



  return (
    <div>
      <h1>{cityDetail?.city?.name}</h1>
      <EachDayWeather cityDetail={cityDetail} />

      <Link to={`/`}><button >go home</button></Link>
    </div>
  )
}

export default DetailPage