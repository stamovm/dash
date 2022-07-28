import type { NextPage } from 'next'

const memeGen: NextPage = () => {
  return (
    <div className="flex flex-col max-w-3xl mx-auto text-white card">
      <div className="p-3 text-lg text-center bg-gradient-to-r from-teal-800 to-teal-600 card">
        Meme Generator
      </div>
      <div className="p-8">
        <div className="">
          <div className="flex justify-between gap-4 mb-4 text-teal-900">
            <input type="text" className="p-1 card grow" value="Shut up" />
            <input type="text" className="card grow" />
          </div>
          <button className="w-full p-2 bg-teal-700 card hover:bg-teal-600">
            Get new meme image
          </button>
          <img className="w-full min-h-[50px]"></img>
        </div>
      </div>
    </div>
  )
}

export default memeGen
