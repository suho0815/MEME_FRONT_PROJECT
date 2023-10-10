/** Navbar와 푸터를 포함한 페이지 구조 */
import {Navbar} from './Navbar'
import {Footer} from './Footer'
import {Outlet} from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
