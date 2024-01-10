import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from 'scenes/homePage/homePage'
import LoginPage from 'scenes/loginPage/loginPage'
import ProfilePage from 'scenes/profilePage/profilePage'
import './App.css'

function App() {
  return (
    <div className='app'>
      app
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
