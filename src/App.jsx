import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Addproduct from './components/Addproduct'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route element={<Home/>}path='/'></Route>
          <Route element={<Addproduct/>}path='/additem'></Route>
        </Routes>
    </div>
  )
}

export default App
