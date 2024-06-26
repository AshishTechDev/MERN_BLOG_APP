import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Footer from './components/Footer.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute.jsx'
import CreatePost from './pages/CreatePost.jsx'
import UpdatePost from './pages/UpdatePost.jsx'
import PostPage from './pages/PostPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Search from './pages/Search.jsx'


export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/search' element={<Search/>} />
          <Route element={<PrivateRoute />} >
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />} >
            <Route path='/create-post' element={<CreatePost/>} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />} >
            <Route path='/update-post/:postId' element={<UpdatePost/>} />
          </Route>
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/post/:postSlug' element={<PostPage/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
