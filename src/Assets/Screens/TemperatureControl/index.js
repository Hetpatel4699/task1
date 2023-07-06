import React, { useState } from 'react'
import './index.css'

const index = () => {
    const [temperatureValue, setTemperatureValue] = useState(24);
    const [temperatureColor, setTemperatureColor] = useState('cold')

    const increaseTemperature = () => {
      const newTemperature = temperatureValue + 1

      if(newTemperature >=25){
        setTemperatureColor('hot')
      }

      setTemperatureValue(newTemperature)
    }

    const decreaseTemperature = () => {
      const newTemperature = temperatureValue - 1

      if(newTemperature < 25){
        setTemperatureColor('cold')
      }

      setTemperatureValue(newTemperature)
    }
    
  return (
    <div className='app-container'>
        <div className='temperature-display-container'>
            <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
        </div>
        <div className='button-conrainer'>
          <button onClick={() => increaseTemperature()}>+</button>
          <button onClick={() => decreaseTemperature()}>-</button>
        </div>
      
    </div>
  )
}

export default index