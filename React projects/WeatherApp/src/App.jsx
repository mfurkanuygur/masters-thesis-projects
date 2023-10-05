import { useState } from 'react'
import './App.css'
import EnterLocation from './components/EnterLocation'
import DisplayLocationData from './components/DisplayLocationData'

function App() {
  const [locationData, setLocationData] = useState()

  return (
    <>
      <EnterLocation setLocationData={setLocationData} />
      {
        locationData == null ? <div>Henüz bir bilgi yok</div> : <DisplayLocationData locationData={locationData} />
      }
    </>
  )
}

export default App
