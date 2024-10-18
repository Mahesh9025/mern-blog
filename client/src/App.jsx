import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/signin'
import Signup from './pages/Signup'
import Projects from './pages/Projects'
import Header from './components/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/sign-in' element={<Signin /> } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
