import { useRef } from 'react'
import PropTypes from 'prop-types'
import { getApiData } from '../request/request';

const EnterLocation = ({ setLocationData }) => {
    const inputRef = useRef()
    const search = (e) => {
        e.preventDefault();
        getApiData(inputRef.current.value).then(data => { setLocationData(data) })
    }


    return (
        <form onSubmit={(e) => search(e)}>
            <input type="text" placeholder="Lütfen bir lokasyon giriniz!" ref={inputRef} />
            <button type="submit">Search</button>
        </form>
    )
}

EnterLocation.propTypes = {
    setLocationData: PropTypes.func
}
export default EnterLocation