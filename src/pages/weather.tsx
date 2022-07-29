import axios from 'axios'
import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

function formatTime(time: string): string {
  let tmpTime = `${time.slice(5, 10)}   Time: ${time.slice(11, 16)}`
  return tmpTime
}

const Weather: NextPage = () => {
  const { isLoading, error, data } = useQuery(['weatherData'], () =>
    axios
      .get('https://api.weather.gov/gridpoints/REV/42,104/forecast/hourly')
      .then((res) => res.data)
  )

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h2>An error has occurred: {error.message}</h2>

  const tempArray = data?.properties?.periods.slice(0, 10)
  // console.log('the data is: ', tempArray)

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {tempArray.map((temp: any) => (
        <div
          className="p-3 transition ease-in delay-500 card "
          key={temp.number}
        >
          <p>{formatTime(temp?.startTime)}</p>
          <p>
            Temp:{' '}
            <span className="text-xl text-teal-900 ">{temp?.temperature}</span>{' '}
            {temp?.temperatureUnit}
          </p>
          <p>Wind: {temp?.windSpeed}</p>
          <p>
            Forecast:{' '}
            <span className="text-teal-900 ">{temp?.shortForecast}</span>
          </p>
          <img src={temp?.icon} alt={temp?.shortForecast}></img>
        </div>
      ))}
    </div>
  )
}

export default Weather
