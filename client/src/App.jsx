import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import Login from './Pages/Login'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='registration' element={<Registration/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
