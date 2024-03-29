import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from './SideBar'
import useStore from './GlobalState'

type Props = {
  title: string
  children?: React.ReactNode
}

const Layout = ({ title, children }: Props): React.ReactElement => {
  const toggleSidebar = useStore((state) => state.toggleSidebar)
  const toggleTestNav = useStore((state) => state.toggleTestNav)

  useEffect(() => {
    const keyDownHandler = (e: { key: string }) => {
      if (e.key === 'Escape') toggleSidebar()
      if (e.key === '-') toggleTestNav()

      // console.log(`You pressed ${e.key}`)
    }
    document.addEventListener('keydown', keyDownHandler)
    // clean up
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col justify-between min-h-screen ">
        <header>
          <nav className="flex items-center justify-between h-12 px-4 shadow-md">
            <Sidebar />
            <Link href="/">
              <a className="text-lg font-bold pl-14">Dash</a>
            </Link>
            <div>
              <Link href="/settings">
                <a className="p-2">Settings</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container px-4 m-auto mt-4">{children}</main>

        <footer className="flex items-center justify-center h-10 shadow-inner">
          Footer
        </footer>
      </div>
    </>
  )
}

export default Layout
