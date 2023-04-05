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
                <div className='nav-input'>
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search for anything'/>
                     <img src={Search} style={{position:'absolute', top:'0', right:'0', bottom:'auto', background:'#39CDCC', padding:'12px 16px', borderTopRightRadius: '4px', borderBottomRightRadius:'4px'}} alt='search'/>
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