import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const DisplayLocationData = ({ locationData }) => {
    return (
        <div className='card' key={locationData?.id}>
            <div className='card-header'>
                <div>
                    <h2>{locationData?.name}</h2>
                    <p>Chance of rain: {locationData?.main.humidity}%</p>
                    <h1>{Math.floor(locationData.main.temp)}°C</h1>
                </div>
                <div className='weather-status'>
                    <img className='weather-img' src={`https://openweathermap.org/img/wn/${locationData?.weather[0].icon}@2x.png`} alt="" />
                    <p className='weather-description'>{locationData?.weather[0].description}</p>
                </div>
            </div>

            <div className='card-body'>
                <div className='center-item'>
                    <p>feels like:</p>
                    <p> {Math.floor(locationData?.main.feels_like)}°C</p>
                </div>
                <div className='center-item'>
                    <p>Min Temp: </p>
                    <p>{Math.floor(locationData?.main.temp_min)}°C</p></div>
                <div className='center-item'>
                    <p>Max Temp: </p>
                    <p>{Math.ceil(locationData?.main.temp_max)}°C</p></div>
                <div className='center-item'>
                    <p>Humidity: </p>
                    <p>{(locationData?.main.humidity)}%</p>
                </div>
            </div>
            <div className='card-footer'>
                <Link to={`/${locationData?.name}`}>
                    <button className='detail-link' >See More Details</button>
                </Link>
            </div>
        </div>
    )
}
DisplayLocationData.propTypes = {
    locationData: PropTypes.object
}
export default DisplayLocationData