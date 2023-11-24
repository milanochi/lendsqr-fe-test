import OrgLeft from '/src/assets/menu/org-left.svg'
// import Arrow from '/src/assets/menu/org-right.svg'
import Home from '/src/assets/menu/home.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { FaBorderAll, FaCreditCard } from "react-icons/fa";

const Menu = () => {

  const { subLink } = useAppContext()

  return (
    <div>
      {/* LEFT NAVIGATION MENU */}
      <aside className={`menu`}>
        <div className='menu__inner' >
          <div className='menu__header'>

            <NavLink to='/dashboard' className={`menu__org`} style={{ textDecoration: 'none', cursor: 'pointer', width: '100%' }}>
              <div >
                <div style={{ display: 'flex', alignItems: 'center' }}><FaBorderAll /><span style={{ marginLeft: '.5rem' }}>Dashboard</span></div>
              </div>
            </NavLink>

            <NavLink to='/subscriptions' className={`menu__org`} style={{ textDecoration: 'none', cursor: 'pointer', width: '100%' }}>
              <div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaCreditCard />
                  <span style={{ marginLeft: '.5rem' }}>Subscriptions</span>
                </div>

              </div>
            </NavLink>
          </div>

        </div>
      </aside>
    </div>
  )
}

export default Menu