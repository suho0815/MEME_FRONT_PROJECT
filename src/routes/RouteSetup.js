import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Layout} from './Layout'
import {NoMatch} from './NoMatch'
import {SignUp, Login} from '../pages/Auth'
import {MainPage} from '../pages/MainPage'
import {DetailSearch} from '../pages/DetailSearch'
import {DetailSubscribe} from '../pages/DetailSubscribe'
import {DetailCommunity} from '../pages/DetailCommunity'
import {DetailCommunity_write} from '../pages/DetailCommunity/DetailCommunity_write'
import {Community_Declaration} from '../pages/DetailCommunity/Community_Declaration'
import {DetailCommunity_Board} from '../pages/DetailCommunity/DetailCommunity_Board'

export const RouteSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/search" element={<DetailSearch />} />
          <Route path="/subscribe" element={<DetailSubscribe />} />
          <Route path="/community" element={<DetailCommunity />} />
          <Route path="/community/write" element={<DetailCommunity_write />} />
          <Route path="/community/declaration" element={<Community_Declaration />} />
          <Route path="/community/:boardId" element={<DetailCommunity_Board />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
