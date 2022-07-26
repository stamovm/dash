import { useQuery, QueryClient, useQueryClient } from '@tanstack/react-query'
// const queryClient = new QueryClient()
// const queryClient = useQueryClient()

// const query = useQuery(['todos'], getTodos)

const useRQSGlobalState = (key, initialData) => [
  useQuery(key, () => initialData, {
    enabled: false,
    initialData,
  }).data,
  (value: string) => queryClient.setQueryData(key, value),
]

const StateEditor = () => {
  const [value, setValue] = useRQSGlobalState('sharedText', 'test')
  return (
    <input value={value} onChange={(evt) => setValue(evt.target.value)} />
    // <input type="text" id="lname" name="lname" />
  )
}

const StateViewer = () => {
  const [value] = useRQSGlobalState('sharedText', '')
  return <div>{value}</div>
}

const GlobalState = () => {
  return (
    <div>
      <StateEditor />
      <StateViewer />
    </div>
  )
}

export default GlobalState
