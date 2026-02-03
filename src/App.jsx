import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoutes'
import Notes from './pages/Notes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      
      <BrowserRouter>
         
         <Navbar/>

         <Routes>

            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/notes' element={<Notes/>} />

            <Route 
               path='/notes'
               element={
                <ProtectedRoute>
                  <Notes/>
                </ProtectedRoute>
               }
            />

         </Routes>
      </BrowserRouter>
      //

    </>
  )
}

export default App
