import type { NextPage } from 'next'
import { useState } from 'react'
import memesData from '../data/memesData'

const memeGen: NextPage = () => {
  // const [imgSrc, setImgSrc] = useState('https://i.imgflip.com/30b1gx.jpg')
  const [meme, setMeme] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  })

  function handleClick() {
    const memesArr = memesData.data.memes
    const rndNum = Math.floor(Math.random() * memesArr.length)

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArr[rndNum].url,
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    console.log(name, value)
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  function handleMouseOver() {
    console.log('MouseOver')
  }

  return (
    <div className="flex flex-col max-w-3xl mx-auto my-4 text-white card">
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
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              className="p-2 card grow"
              placeholder="Bottom text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full p-2 mb-4 bg-teal-700 card hover:bg-teal-600"
            onClick={handleClick}
          >
            Get random meme image
          </button>
          {/* <img
            className="w-full min-h-[250px] card"
            src={imgSrc}
            onMouseOver={handleMouseOver}
          /> */}
          <div className="relative">
            <img
              src={meme.randomImage}
              className="meme--image w-full min-h-[250px] card"
            />
            <h2 className="meme--text top-0">{meme.topText}</h2>
            <h2 className="meme--text bottom-0">{meme.bottomText}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memeGen
