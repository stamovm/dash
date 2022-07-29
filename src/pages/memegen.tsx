import type { NextPage } from 'next'
import { useState } from 'react'
import memesData from '../data/memesData'

const memeGen: NextPage = () => {
  const [imgSrc, setImgSrc] = useState('https://i.imgflip.com/30b1gx.jpg')

  function handleClick() {
    const memesArr = memesData.data.memes
    const rndNum = Math.floor(Math.random() * memesArr.length)
    const { url } = memesArr[rndNum]
    setImgSrc(url)
  }
  function handleMouseOver() {
    console.log('MouseOver')
  }

  return (
    <div className="flex flex-col max-w-3xl mx-auto mt-4 text-white card">
      <div className="p-3 text-lg font-semibold text-center bg-gradient-to-r from-teal-900 to-teal-600 card">
        Meme Generator
      </div>
      <div className="p-8">
        <div className="">
          <div className="flex justify-between gap-4 mb-4 text-teal-900">
            <input
              type="text"
              className="p-2 card grow"
              placeholder="Top text"
            />
            <input
              type="text"
              className="p-2 card grow"
              placeholder="Bottom text"
            />
          </div>
          <button
            className="w-full p-2 mb-4 bg-teal-700 card hover:bg-teal-600"
            onClick={handleClick}
          >
            Get random meme image
          </button>
          <img
            className="w-full min-h-[250px] card"
            src={imgSrc}
            onMouseOver={handleMouseOver}
          />
        </div>
      </div>
    </div>
  )
}

export default memeGen
