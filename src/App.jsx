import React from 'react'
import PickCity from './components/PickCity'



//  funkce pro získání dat o počasí
const getWeatherData = async (cityId) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=48af8bf98245f07f707f0489d11d219b&units=metric`
  );
  return response.json();
};
const App = () => {
  return (
    <PickCity />
  )
}

export default App