import { useState } from 'react'
import './App.css'
import EnterLocation from './components/EnterLocation'
import DisplayLocationData from './components/DisplayLocationData'
import Router from './routes/Router'

function App() {

  return (
    <>
      {/* <EnterLocation setLocationData={setLocationData} /> */}
      <Router/>
      {/* {
        locationData == null ? <div>Henüz bir bilgi yok</div> : <DisplayLocationData locationData={locationData} />
      } */}
    </>
  )
}

export default App
