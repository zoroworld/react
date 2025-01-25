import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {

  const [data, setData] = useState([]); 

   async function  getWeatherApi(lat, lon){

        try {
          let API_KEY = '72169f5861cc228e5482b5779c3a79e9';
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const result = await response.json();
          console.log("result: ", result);
          
          setData(result);
        } catch (error) {
          console.error('Fetch error:', error);
          throw error; // Allow further handling if necessary
        }
    }


    function showPostion(postion)
    {
      let cord = [postion.coords.latitude, postion.coords.longitude];
      getWeatherApi(cord[0], cord[1]);
    }


    useEffect(() => {
       if (navigator.geolocation){
          navigator.geolocation.getCurrentPosition(showPostion);
       }
    }, [])

  return (
    <>
      <div >
        <h1>{data.name}</h1>
      </div>
    </>
  )
}

export default App
