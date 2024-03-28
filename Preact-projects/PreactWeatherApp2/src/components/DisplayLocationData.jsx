// import PropTypes from 'prop-types'
import { Link } from 'preact-router/match';


const DisplayLocationData = ({ locationData }) => {
    return (
        <div className='card' key={locationData?.id}>
            <div className='card-header'>
                <div>
                    <h1>{locationData?.name}</h1>
                    <p>Chance of rain: {locationData?.main?.humidity}%</p>
                    <h2>{Math.floor(locationData?.main?.temp)}°C</h2>
                </div>
                <div className='weather-status'>
                    <img className='weather-img' src={`https://openweathermap.org/img/wn/${locationData?.weather[0]?.icon}@2x.png`} alt="" />
                    <p className='weather-description'>{locationData?.weather[0].description}</p>
                </div>
            </div>
            <div className='card-body'>
                <div className='card-content'>
                    <div className='content-title'>
                        <i className="fa-solid fa-street-view"></i>
                        <p>feels like</p>
                    </div>
                    <p className='content-text'> {Math.floor(locationData?.main.feels_like)}°C</p>
                </div>
                <div className='card-content'>
                    <div className='content-title'>
                        <i className="fa-solid fa-temperature-low"></i>
                        <p>Min Temp </p>
                    </div>
                    <p className='content-text'>{Math.floor(locationData?.main.temp_min)}°C</p>
                </div>
                <div className='card-content'>
                    <div className='content-title'>
                        <i className="fa-solid fa-temperature-high"></i>
                        <p>Max Temp </p>
                    </div>
                    <p className='content-text'>{Math.ceil(locationData?.main.temp_max)}°C</p>
                </div>
                <div className='card-content'>
                    <div className='content-title'>
                        <i className="fa-solid fa-droplet"></i>
                        <p>Humidity </p>
                    </div>
                    <p className='content-text'>{(locationData?.main.humidity)}%</p>
                </div>
            </div>
            <div className='card-footer'>
                <Link href={`/${locationData?.id}`}>
                    <button className='button-link' >See More Details</button>
                </Link>
            </div>
        </div>
    )
}
// DisplayLocationData.propTypes = {
//     locationData: PropTypes.object
// }
export default DisplayLocationData

