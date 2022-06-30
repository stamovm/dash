import Copyright from '../src/Copyright'
import NavBar from '../components/NavBar'
import MyDrawer from '../components/MyDrawer'
// type Props = {}

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <MyDrawer />
      {children}
      <Copyright />
    </div>
  )
}

export default Layout
