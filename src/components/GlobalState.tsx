import create from 'zustand'

const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    console.log(JSON.parse(window.localStorage.getItem(key)))
    return JSON.parse(window.localStorage.getItem(key))
  }
}
const setLocalStorage = (key: string, value) => {
  if (typeof window !== 'undefined') {
    console.log(JSON.stringify(value))
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

type State = {
  showSidebar: boolean
  myCount: number
  myString: string

  incrMyCount: (by: number) => void
  setMyString: (myString: string) => void
}

const useStore = create<State>((set) => ({
  showSidebar: getLocalStorage('showSidebar') || false,
  toggleSidebar: () =>
    set((state) => {
      setLocalStorage('showSidebar', !state.showSidebar)
      return { showSidebar: !state.showSidebar }
    }),
  myCount: 0,
  incrMyCount: (by) => set((state) => ({ myCount: state.myCount + by })),
  myString: '',
  setMyString: (myString) =>
    set(() => ({
      myString: myString,
    })),
}))

const useStore2 = create((set) => ({
  collection: getLocalStorage('collection') || [],
  setCollection: (collection) =>
    set((state) => {
      setLocalStorage('collection', collection)
      return { collection }
    }),
}))

function BearCounter() {
  const myCount = useStore((state) => state.myCount)
  const myString = useStore((state) => state.myString)
  return (
    <h1>
      {myCount} {myString}...
    </h1>
  )
}

function Controls() {
  const incrMyCount = useStore((state) => state.incrMyCount)

  // const myString = useStore((state) => state.myString)
  const setMyString = useStore((state) => state.setMyString)
  return (
    <>
      <button className="primary-button" onClick={() => incrMyCount(-1)}>
        one down
      </button>
      <button className="m-3 primary-button" onClick={() => incrMyCount(1)}>
        one up
      </button>

      <button className="primary-button" onClick={() => setMyString('test 20')}>
        set to 20
      </button>
    </>
  )
}

export const GlobalState = () => {
  return (
    <div>
      global state
      <BearCounter />
      <Controls />
    </div>
  )
}

export default useStore
