import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Layout} from './Layout'
import {NoMatch} from './NoMatch'
import {SignUp, Login} from '../pages/Auth'
import {MainPage} from '../pages/MainPage'

export const RouteSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
