import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import Applications from './Applications'
import CaseStudies from './CaseStudies'
import Constitution from './Constitution'
import Profile from './Profile'
import Article from './Constitution/Article'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/Article" element={<Article />} />
        <Route path='/applications' element={<Applications />}></Route>
        <Route path='/caseStudies' element={<CaseStudies />}></Route>
        <Route path='/constitution' element={<Constitution />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App