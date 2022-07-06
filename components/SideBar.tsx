import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
// import { useRouter } from 'next/router'

interface IProps {
  showSidebar: boolean
  setShowSidebar: Dispatch<SetStateAction<boolean>>
}

const navRoutes = require('../utils/navRoutes.json')
console.log('routes', navRoutes)
const Sidebar = ({ showSidebar, setShowSidebar }: IProps) => {
  return (
    <>
      {showSidebar ? (
        <button
          className="fixed top-0 z-50 flex items-center text-4xl text-teal-500 cursor-pointer left-6"
          onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer left-15 top-3"
          fill="#14b8a6"
          viewBox="0 0 100 80"
          width="30"
          height="30"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}
      <div
        className={`top-0 left-[-10rem] w-40 bg-gray-500  p-4 pt-14 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-full ' : 'translate-x-0'
        }`}
      >
        {navRoutes.map((route: any) => (
          <div key={route.id} className="">
            <Link href={route.link}>
              <a className="mt-4 text-xl font-semibold text-white hover:text-teal-400">
                {route.label}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Sidebar
