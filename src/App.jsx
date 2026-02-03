import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
      
      <BrowserRouter>
         <Routes>

            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/notes' element={<Notes/>} />

         </Routes>
      </BrowserRouter>
      //

    </>
  )
}

export default App
