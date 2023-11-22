import OrgLeft from '/src/assets/menu/org-left.svg'
// import Arrow from '/src/assets/menu/org-right.svg'
import Home from '/src/assets/menu/home.svg'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const Menu = () => {
  const navigate = useNavigate()

  function toSubscriptions() {
    navigate('/subscriptions')
  }

  function toDashboard() {
    navigate('/dashboard')
  }
  const { subLink } = useAppContext()
  const [subscriptions, setSubscriptions] = useState('')



  return (
    <div>
      {/* LEFT NAVIGATION MENU */}
      <aside className='menu'>
        <div className='menu__inner' >
          <div className='menu__header'>
            <div className='menu__org' onClick={toDashboard} style={{ textDecoration: 'none', cursor: 'pointer', width: '100%' }}>
              <img src={OrgLeft} alt='briefcase' />
              <div >
                <div>Dashboard</div>
              </div>
            </div>
            <div className='menu__org'>
              <img src={Home} alt='home' />
              <div onClick={toSubscriptions} style={{ textDecoration: 'none', cursor: 'pointer', width: '100%' }}>
                <div >
                  <div>Subscriptions</div>
                </div>
              </div>
            </div>
          </div>

          <ul className='menu__list'>

          </ul>

        </div>
      </aside>
    </div>
  )
}

export default Menu