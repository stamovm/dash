import { useEffect } from 'react'

import create from 'zustand'

interface Pokemon {
  id: number
  name: string
  image: string
}

const usePokemonStore = create<{
  pokemon: Pokemon[]
  setPokemon: (pokemon: Pokemon[]) => void
  filteredPokemon: Pokemon[]
  filter: string
  setFilter: (filter: string) => void
}>((set) => ({
  pokemon: [],
  filteredPokemon: [],
  filter: '',

  setPokemon: (pokemon: Pokemon[]) =>
    set({ pokemon, filteredPokemon: pokemon }),
  setFilter: (filter: string) =>
    set((state) => ({
      filter,
      filteredPokemon: state.pokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filter.toLowerCase())
      ),
    })),
}))

export async function getServerSideProps() {
  const resp = await fetch(
    'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
  )

  usePokemonStore.getState().setPokemon(await resp.json())

  return {
    props: {
      pokemon: usePokemonStore.getState().pokemon,
    },
  }
}

export default function zuspokimon({ pokemon }: { pokemon: Pokemon[] }) {
  const { filter, filteredPokemon, setFilter } = usePokemonStore()

  useEffect(() => {
    usePokemonStore.getState().setPokemon(pokemon)
  }, [pokemon])

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
