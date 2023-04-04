import React, { useState } from 'react'
import Logo from '/src/assets/logo.svg'
import DropDown from '/src/assets/dropdown.svg'
import Bell from '/src/assets/bell.svg'
import Search from '/src/assets/dashboard/search.svg'

const NavBar = () => {
const [search, setSearch] = useState('')
  return (
    
        <nav>
            <div className="dashboard__nav-left">
                <img src={Logo} className='logo' alt='logoImg' />
                <div style={{position: 'relative'}}>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search for anything'/>
                <img src={Bell} style={{position:'absolute', top:'10%', right:'3%'}} alt='search'/>
                </div>
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