import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import './App.css'
import { Context } from './components/Context'
import Work from './Pages/Work'
import About from './Pages/About'


const App = () => {
  const context = useContext(Context)

  context.theme ? document.body.classList.add('body-dark') : document.body.classList.remove('body-dark')
  
    return (
    <div className={`main-container ${context.theme ? 'dark-mode': 'light-mode'}`}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='projects' element={<Work />} />
            <Route path='about' element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
