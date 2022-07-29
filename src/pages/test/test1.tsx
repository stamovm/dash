import type { NextPage } from 'next'
import { GlobalState } from '../../components/GlobalState'

const Test1: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="p-3 transition ease-in delay-500 card ">
        <GlobalState />
      </div>
    </div>
  )
}

export default Test1
