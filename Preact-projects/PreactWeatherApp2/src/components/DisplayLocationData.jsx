// import PropTypes from 'prop-types'
import { Link } from 'preact-router/match';
import DetailPage from '../views/DetailPage';


const DisplayLocationData = ({ locationData }) => {
    const [summary,detail]=locationData
    console.log(detail)
    return (
        <div className='card' key={summary?.id}>
            <div className='card-header'>
                <div>
                    <div className='weather-status'>
                        <img className='weather-img' src={`https://openweathermap.org/img/wn/${summary?.weather[0]?.icon}@2x.png`} alt="" />
                        <p className='weather-description'>{summary?.weather[0].description}</p>
                    </div>
                    <h1>{summary?.name}</h1>
                    <p>Chance of rain: {summary?.main?.humidity}%</p>
                    <h2>{Math.floor(summary?.main?.temp)}°C</h2>
                </div>
            </div>
            <div className='card-body'>
                <div className='card-content'>
                    <div className='content-title'>
                        <i className="fa-solid fa-street-view"></i>
                        <p>feels like</p>
                    </div>
                    <p className='content-text'> {Math.floor(summary?.main.feels_like)}°C</p>
                </div>
                <div className='card-content'>
                    <div className='content-title'>
                        <i className="fa-solid fa-temperature-low"></i>
                        <p>Min Temp </p>
                    </div>
                    <p className='content-text'>{Math.floor(summary?.main.temp_min)}°C</p>
                </div>
                <div className='card-content'>
                    <div className='content-title'>
                        <i className="fa-solid fa-temperature-high"></i>
                        <p>Max Temp </p>
                    </div>
                    <p className='content-text'>{Math.ceil(summary?.main.temp_max)}°C</p>
                </div>
                <div className='card-content'>
                    <div className='content-title'>
                        <i className="fa-solid fa-droplet"></i>
                        <p>Humidity </p>
                    </div>
                    <p className='content-text'>{(summary?.main.humidity)}%</p>
                </div>
            </div>
            <div className='card-footer'>
                {/* <Link to={`/${locationData?.id}`}> */}
                {/* <button className='button-link' >See More Details</button> */}
                {/* </Link> */}

                {/* <button onClick={() => { setOpen(!open) }}>
                    {open && "See Less Detail" || "See More Detail"}
                </button> */}
            </div>
            <DetailPage detailData={detail} />
            {/* <div className='card-footer'>
                <Link href={`/${locationData?.id}`}>
                    <button className='button-link' >See More Details</button>
                </Link>
            </div> */}
        </div>
    )
}
// DisplayLocationData.propTypes = {
//     locationData: PropTypes.object
// }
export default DisplayLocationData

