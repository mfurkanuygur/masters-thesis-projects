import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { getApiData } from '../request/request';
import DisplayLocationData from './DisplayLocationData';
import Loading from './Loading';

const EnterLocation = ({ locationData, setLocationData, cityName, setCityName }) => {
    const inputRef = useRef()

    useEffect(() => {
        if (cityName == "Kayseri") {
            getApiData("Kayseri").then(data => { setLocationData(data) })
        }
        else {
            getApiData(cityName).then(data => { setLocationData(data) })
        }
    }, [])

    const search = (e) => {
        e.preventDefault();
        getApiData(inputRef?.current?.value).then(data => { setLocationData(data), setCityName(inputRef?.current?.value) })
    }

    return (
        <div>
            <form onSubmit={(e) => search(e)}>
                <input type="text" placeholder="Enter a location!" ref={inputRef} />
                <button type="submit">Search</button>
            </form>
            {
                locationData == null ? <Loading /> : <DisplayLocationData locationData={locationData} />
            }
        </div>
    )
    // https://api.openweathermap.org/data/2.5/weather?q=sivas&appid=057275c30dc7aecc34c49be69110d6d1&lang=tr&units=metric
    // https://api.openweathermap.org/data/2.5/forecast?q=sivas&appid=057275c30dc7aecc34c49be69110d6d1&lang=tr&units=metric

}

EnterLocation.propTypes = {
    cityName: PropTypes.string,
    setCityName: PropTypes.func,
    locationData: PropTypes.object,
    setLocationData: PropTypes.func
}
export default EnterLocation