import axios from 'axios'
import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

const News: NextPage = () => {
  const { isLoading, error, data } = useQuery(['weatherData'], () =>
    axios.get('news/api').then((res) => res.data)
  )

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h2>An error has occurred: {error.message}</h2>

  const tempArray = data

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {tempArray.map((temp: any) => (
        <div
          className="p-3 transition ease-in delay-500 card "
          key={temp.number}
        >
          news card
        </div>
      ))}
    </div>
  )
}

export default News
