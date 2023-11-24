import NavBar from '../components/NavBar'
import Menu from '../components/Menu'
import MainDashboard from '../components/MainDashboard'
// import { useEffect, useState } from 'react'

const DashBoard = () => {
  // const [isOnline, setIsOnline] = useState(navigator.onLine);

  // useEffect(() => {
  //   const handleOnline = () => {
  //     setIsOnline(true);
  //   };

  //   const handleOffline = () => {
  //     setIsOnline(false);
  //   };

  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);

  //   return () => {
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  //   };
  // }, []);
  return (
    <div className="dashboard" style={{ overflowX: 'hidden' }}>
      <NavBar page={'Dashboard'} />
      <Menu />
      <MainDashboard />
    </div>
  )
}

export default DashBoard