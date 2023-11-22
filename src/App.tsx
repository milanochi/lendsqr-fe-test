import { Routes, Route } from 'react-router-dom'
import './main.scss'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import UserDetails from './pages/UserDetails'
import { AppContextProvider } from './context/AppContext'
import Subscriptions from './pages/Subscriptions'

function App() {
  return (
    <div>
      <AppContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/details' element={<UserDetails />} />
          <Route path='/subscriptions' element={<Subscriptions />} />
        </Routes>
      </AppContextProvider>
    </div>
  )
}

export default App
