import { Routes, Route } from 'react-router-dom'
import './main.scss'
import  Login  from './pages/Login'
import  DashBoard  from './pages/DashBoard'
import  UserDetails  from './pages/UserDetails'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />  
        <Route path='/details' element={<UserDetails />} />
      </Routes>
    </div>
  )
}

export default App
