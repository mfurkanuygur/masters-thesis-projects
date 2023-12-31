// import PropTypes from 'prop-types'
import { Link } from 'preact-router/match';

const DisplayLocationData = ({ locationData }) => {
    switch (locationData?.weather[0]?.icon) {
        case '01d':
        case '01n':
        case '02d':
        case '02n':
            document.body.style.backgroundColor = 'lightblue';
            break;
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            document.body.style.backgroundColor = 'lightgray';
            break;
        case '13d':
        case '13n':
            document.body.style.backgroundColor = 'whitesmoke';
            break;
        case '09d':
        case '09n':
        case '10d':
        case '10n':
            document.body.style.backgroundColor = 'darkgrey';
            break;
        case '50d':
        case '50n':
            document.body.style.backgroundColor = 'gray';
            break;
        default:
            document.body.style.backgroundColor = 'lightgray'; // Varsayılan durum
            break;
    }


    return (
        <div className='card' key={locationData?.id}>
            <div className='card-header'>
                <div>
                    <h2>{locationData?.name}</h2>
                    <p>Chance of rain: {locationData?.main?.humidity}%</p>
                    <h1>{Math.floor(locationData?.main?.temp)}°C</h1>
                </div>
                <div className='weather-status'>
                    <img className='weather-img' src={`https://openweathermap.org/img/wn/${locationData?.weather[0]?.icon}@2x.png`} alt="" />
                    <p className='weather-description'>{locationData?.weather[0].description}</p>
                </div>
            </div>

            <div className='card-body'>
                <div className='center-item'>
                    <div className='item-title'>
                        <i className="fa-solid fa-street-view"></i>
                        <p>feels like:</p>
                    </div>
                    <p> {Math.floor(locationData?.main.feels_like)}°C</p>
                </div>
                <div className='center-item'>
                    <div className='item-title'>
                        <i className="fa-solid fa-temperature-low"></i>
                        <p>Min Temp: </p>
                    </div>
                    <p>{Math.floor(locationData?.main.temp_min)}°C</p></div>
                <div className='center-item'>
                    <div className='item-title'>
                        <i className="fa-solid fa-temperature-high"></i>
                        <p>Max Temp: </p>
                    </div>
                    <p>{Math.ceil(locationData?.main.temp_max)}°C</p></div>
                <div className='center-item'>
                    <div className='item-title'>
                        <i className="fa-solid fa-droplet"></i>
                        <p>Humidity: </p>
                    </div>
                    <p>{(locationData?.main.humidity)}%</p>
                </div>
            </div>
            <div className='card-footer'>
                <Link href={`/${locationData?.name}`}>
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