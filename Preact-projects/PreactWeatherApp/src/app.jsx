import Router from 'preact-router';

import './app.css'
import EnterLocation from './components/EnterLocation';
import DetailPage from './components/DetailPage';
import { useState } from 'preact/hooks';

export function App() {

  const [locationData, setLocationData] = useState()
  const [cityName, setCityName] = useState("Kayseri")

  return (
    <Router>
      <EnterLocation path="/" locationData={locationData} setLocationData={setLocationData} cityName={cityName} setCityName={setCityName}/>
      <DetailPage path="/:id" />

    </Router>
  )
}
