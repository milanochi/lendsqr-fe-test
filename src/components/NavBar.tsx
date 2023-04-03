import React, { useState } from 'react'
import Logo from '/src/assets/logo.svg'
import DropDown from '/src/assets/dropdown.svg'
import Bell from '/src/assets/bell.svg'

const NavBar = () => {
const [search, setSearch] = useState('')
  return (
    
        <nav>
            <div className="dashboard__nav-left">
                <img src={Logo} className='logo' alt='logoImg' />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search for anything'/>
             </div>
            <div className="dashboard__nav-right">
                <div className='dashboard__nav-notify'>
                <span>Docs</span>
                <img src={Bell} alt='bell' />
            </div>
             <div className='dashboard__nav-user'>
                <div className='dashboard__user-img'></div>
                <span>Adedeji</span><img src={DropDown} alt='dropdown'/>
            </div>
            </div>
      </nav>
  )
}

export default NavBar