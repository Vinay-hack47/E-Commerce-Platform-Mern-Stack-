import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar></Navbar>
  <Outlet></Outlet>
  <Footer></Footer>

    </>
  )
}

export default App
