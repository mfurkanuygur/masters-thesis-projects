import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const DisplayLocationData = ({ locationData }) => {
    return (
        <div>
            <ul>
                <li>{locationData?.id}</li>
                <li>{locationData?.name}</li>
                <li>{locationData?.weather[0].description}</li>
                <img src={`https://openweathermap.org/img/wn/${locationData?.weather[0].icon}@2x.png`} alt="" />
                <li>Ana Sıcaklık: {locationData?.main.temp}</li>
                <li>Hissedilen: {locationData?.main.feels_like}</li>
                <li>En düşük: {locationData?.main.temp_min}</li>
                <li>En yüksek: {locationData?.main.temp_max}</li>
                <li>Nem: {locationData?.main.humidity}</li>
            </ul>
            <Link to={`/${locationData?.name}`}><button >See More Details</button></Link>
        </div>
    )
}
DisplayLocationData.propTypes = {
    locationData: PropTypes.object
}
export default DisplayLocationData