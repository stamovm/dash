import { useQuery, useQueryClient } from 'react-query'

const useRQSGlobalState = (key, initialData) => [
    const queryClient = useQueryClient()
    useQuery(key, () => initialData, {
    enabled: false,
    initialData,
  }).data,
  (value) => queryClient.setQueryData(key, value),
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
