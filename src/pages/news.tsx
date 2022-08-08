import axios from 'axios'
import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

const News: NextPage = () => {
  const { isLoading, error, data } = useQuery(['weatherData'], () =>
    axios
      .get('https://inshorts.deta.dev/news?category=technology')
      .then((res) => res.data)
  )

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h2>An error has occurred: {error.message}</h2>

  const tempArray = data.data
  console.log('data-: ', data)
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {tempArray.map((news: any, i: number) => (
        <div className="p-3 transition ease-in delay-500 card " key={i}>
          <p className="py-2 text-teal-800">{news.date}</p>
          <a href={news.readMoreUrl}>
            <p className="hover:text-teal-700">{news.title}</p>
          </a>
          <a href={news.url}>
            <img src={news?.imageUrl} alt={news.title}></img>
          </a>
          <p className="py-2">{news.content}</p>
          <p>Author: {news.author}</p>
        </div>
      ))}
    </div>
  )
}

export default News
