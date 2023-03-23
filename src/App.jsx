import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
     <main className='body-wrapper'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Body />}/>
        <Route exact path='/amazon' element={<Body />}/>
        <Route exact path='/american' element={<Body />}/>
        <Route exact path='/apple' element={<Body />}/>
        <Route exact path='/airbnb' element={<Body />}/>
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}

export default App