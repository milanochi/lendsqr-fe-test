import OrgLeft from '/src/assets/menu/org-left.svg'
// import Arrow from '/src/assets/menu/org-right.svg'
import Home from '/src/assets/menu/home.svg'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const Menu = () => {
  // const navigate = useNavigate()
  const { subLink } = useAppContext()
  const [subscriptions, setSubscriptions] = useState('')



  return (
    <div>
      {/* LEFT NAVIGATION MENU */}
      <aside className='menu'>
        <div className='menu__inner' >
          <div className='menu__header'>
            <div className='menu__org'>
              <img src={OrgLeft} alt='briefcase' />
              <a href='/dashboard' style={{ textDecoration: 'none' }}>
                <div>Dashboard</div>
              </a>
            </div>
            <div className='menu__org'>
              <img src={Home} alt='home' />
              <div style={{ width: '100%' }}>
                <a href={subLink} style={{ textDecoration: 'none' }}>
                  <div>Subscriptions</div>
                </a>
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