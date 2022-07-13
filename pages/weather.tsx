import axios from 'axios'
import type { NextPage } from 'next'
import { useQuery } from 'react-query'

const Weather: NextPage = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    axios
      .get('https://api.weather.gov/gridpoints/REV/42,104/forecast/hourly')
      .then((res) => res.data)
  )

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h2>An error has occurred: {error.message}</h2>

  const tempArray = data?.properties?.periods.slice(0, 10)
  console.log('the data is: ', tempArray)

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {tempArray.map((temp: any) => (
        <div
          className="p-3 transition ease-in delay-500 card "
          key={temp.number}
        >
          <p>Time: {temp?.startTime}</p>
          <p>
            Temperature: {temp?.temperature} {temp?.temperatureUnit}
          </p>
          <p>Wind Speed: {temp?.windSpeed}</p>
          <p>Forecast: {temp?.shortForecast}</p>
          <img src={temp?.icon} alt={temp?.shortForecast}></img>
        </div>
      ))}
    </div>
  )
}

export default Weather
