import { useEffect, useRef } from 'preact/hooks'

// import PropTypes from 'prop-types'
import { getApiData } from '../requests/request';

const EnterForm = ({ setLocationData, cityName, setCityName }) => {
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
        if (inputRef.current.value !== "")
            getApiData(inputRef?.current?.value).then(data => { setLocationData(data), setCityName(inputRef?.current?.value) })
    }

    return (
        <form onSubmit={(e) => search(e)}>
            <input type="text" placeholder="Enter a location!" ref={inputRef} />
            <button type="submit">Search</button>
        </form>
    )
    // https://api.openweathermap.org/data/2.5/weather?q=sivas&appid=057275c30dc7aecc34c49be69110d6d1&lang=tr&units=metric
    // https://api.openweathermap.org/data/2.5/forecast?q=sivas&appid=057275c30dc7aecc34c49be69110d6d1&lang=tr&units=metric

}

// EnterForm.propTypes = {
//     cityName: PropTypes.string,
//     setCityName: PropTypes.func,
//     locationData: PropTypes.object,
//     setLocationData: PropTypes.func
// }
export default EnterForm