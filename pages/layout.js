import Navbar from './Navbar'
import Blog from './Blog'
import Team from './Team'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Team />
      <main>{children}</main>
      <Blog />
    </>
  )
}