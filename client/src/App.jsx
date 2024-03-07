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

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          {/* <Route element={<PrivateRoute />} > */}
            <Route path='/dashboard' element={<Dashboard/>} />
          {/* </Route> */}
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
