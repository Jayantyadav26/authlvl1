import { Dashboard } from './components/dashboard'
import { Home } from './components/home'
import { Login } from './components/login'
import Signup from './components/signup'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
