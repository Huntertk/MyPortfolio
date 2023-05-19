import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import './App.css'
import { Context } from './components/Context'


const App = () => {
  const context = useContext(Context)
    return (
    <div className={`${context.theme ? 'dark-mode': 'light-mode'}`}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
