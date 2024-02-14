import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}
