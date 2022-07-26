import axios from 'axios'
import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

const Test2: NextPage = () => {
  const { isLoading, error, data, isFetching } = useQuery(['chuckData'], () =>
    axios.get('https://api.chucknorris.io/jokes/random').then((res) => res.data)
  )

  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h2>An error has occurred: {error?.message}</h2>

  // console.log('the data is: ', data)
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="p-3 transition ease-in delay-500 card ">{data.value}</div>
    </div>
  )
}

export default Test2
