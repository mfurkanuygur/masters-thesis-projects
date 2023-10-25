import { Link, useParams } from "react-router-dom"

const DetailPage = () => {
  const { id } = useParams()
  return (
    <div>
      <div>{id}</div>
      <Link to={`/`}><button >go home</button></Link>
    </div>
  )
}

export default DetailPage