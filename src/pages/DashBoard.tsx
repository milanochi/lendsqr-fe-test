import NavBar from '../components/NavBar'
import Menu from '../components/Menu'
import MainDashboard from '../components/MainDashboard'


const DashBoard = () => {

  return (
    <div className="dashboard">
      <NavBar page={'Dashboard'} />
      <Menu />
      <MainDashboard />
    </div>
  )
}

export default DashBoard