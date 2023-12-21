import EnterLocation from '../components/EnterLocation'
import DetailPage from '../components/DetailPage'
import { useRoutes } from 'react-router-dom'
import { useState } from 'react'


const Router = () => {
    const [locationData, setLocationData] = useState()
    const [cityName, setCityName] = useState("Kayseri")
    
    const routes = useRoutes([
        { path: "/", element: <EnterLocation locationData={locationData} setLocationData={setLocationData} cityName={cityName} setCityName={setCityName} /> },
        { path: `/:id`, element: <DetailPage /> }
    ])
    return routes
}

export default Router