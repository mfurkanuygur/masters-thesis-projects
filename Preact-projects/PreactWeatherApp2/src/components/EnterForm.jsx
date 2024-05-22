import { useEffect, useRef } from 'preact/hooks'
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
}

export default EnterForm