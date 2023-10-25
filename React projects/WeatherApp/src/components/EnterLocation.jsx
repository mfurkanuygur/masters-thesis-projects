import { useRef } from 'react'
import PropTypes from 'prop-types'
import { getApiData } from '../request/request';
import DisplayLocationData from './DisplayLocationData';

const EnterLocation = ({ locationData, setLocationData }) => {
    const inputRef = useRef()
    const search = (e) => {
        e.preventDefault();
        getApiData(inputRef.current.value).then(data => { setLocationData(data) })
    }


    return (
        <div>
            <form onSubmit={(e) => search(e)}>
                <input type="text" placeholder="Lütfen bir lokasyon giriniz!" ref={inputRef} />
                <button type="submit">Search</button>
            </form>
            {
                locationData == null ? <div>Henüz bir bilgi yok</div> : <DisplayLocationData locationData={locationData} />
            }
        </div>
    )
}

EnterLocation.propTypes = {
    locationData:PropTypes.object,
    setLocationData: PropTypes.func
}
export default EnterLocation