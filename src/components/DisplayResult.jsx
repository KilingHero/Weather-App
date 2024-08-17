import React from 'react'

const DisplayResult = ({weatherData, selectedTown}) => {
  




  return (
    <div className="weather-forecast">
     

      <h2>Předpověď počasí pro  </h2>
     
    <table>
      <thead>
        <tr>
          <th>Ikona</th>
          <th>Datum</th>
          <th>Teplota</th>
          <th>Max. Teplota</th>
          <th>Stav počasí</th>
        </tr>
      </thead>
      <tbody>
      {
  weatherData.map((forecast, index) => (
    <tr key={index}>
      <td >{new Date(forecast.dt_txt).toLocaleString()}</td>
      <td>{forecast.main.temp}°C</td>
      <td>{forecast.main.temp_max}°C</td>
      <td>{forecast.weather[0].description}</td>
    </tr>
  )
)}
      </tbody>
    </table>
  </div>
  )
}

export default DisplayResult