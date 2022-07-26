import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

interface Pokemon {
  id: number
  name: string
  image: string
}

const getPokemon = (): Promise<Pokemon[]> =>
  fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json').then(
    (resp) => resp.json()
  )

export async function getServerSideProps() {
  return {
    props: {
      initialPokemon: await getPokemon(),
    },
  }
}

export default function rqpokimon({
  initialPokemon,
}: {
  initialPokemon: Pokemon[]
}) {
  const { data: pokemon } = useQuery(['pokemon'], getPokemon, {
    initialData: initialPokemon,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const [filter, setFilter] = useState('')

  const filteredPokemon = useMemo(
    () =>
      pokemon.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, pokemon]
  )

  return (
    <div>
      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {filteredPokemon.slice(0, 20).map((p) => (
          <div key={p.id}>
            <img
              className="w-20"
              alt={p.name}
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${p.image}`}
            />
            <h2>{p.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
