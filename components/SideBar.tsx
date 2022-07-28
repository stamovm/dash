import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
const navRoutes = require('../utils/navRoutes.json')

interface IRoute {
  label: string
  link: string
}
interface IProps {
  showSidebar: boolean
  setShowSidebar: Dispatch<SetStateAction<boolean>>
}
const Sidebar = ({ showSidebar, setShowSidebar }: IProps) => {
  return (
    <>
      {showSidebar ? (
        <button
          className="fixed top-0 z-50 flex items-center text-4xl text-teal-500 cursor-pointer left-6 hover:duration-300 hover:text-teal-600"
          onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer left-15 top-3 hover:duration-300 hover:bg-teal-100"
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
        className={`top-0 left-[-10rem] w-40 bg-gray-700/90  p-4 pt-14 text-white fixed h-full z-40  ease-in-out duration-500 ${
          showSidebar ? 'translate-x-full ' : 'translate-x-0'
        }`}
      >
        {navRoutes.map((route: IRoute, i: number) => (
          <div key={i} className="mb-1 ml-2">
            <Link href={route.link}>
              <a className="text-xl font-semibold text-white hover:duration-300 hover:text-teal-400">
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
