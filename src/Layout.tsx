import Copyright from '../src/Copyright'
import NavBar from '../components/NavBar'
// type Props = {}

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      {children}
      <Copyright />
    </div>
  )
}

export default Layout
