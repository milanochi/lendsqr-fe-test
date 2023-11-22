import React, { useEffect, useState } from 'react'
import Logo from '/src/assets/logo.svg'
// import DropDown from '/src/assets/dropdown.svg'
import Bell from '/src/assets/bell.svg'
// import Search from '/src/assets/search.svg'
import { useAppContext } from '../context/AppContext'

const NavBar = ({ page }: any) => {
    // const [search, setSearch] = useState('')
    const { firstName, lastName, subLink } = useAppContext()


    return (

        <nav>
            <div className="dashboard__nav-left">
                <img src={Logo} className='logo' alt='logoImg' />
                <div style={{ color: '#213F7D', textTransform: 'uppercase', fontSize: '.8em', fontWeight: '500' }}>{page}</div>
                {/* <div className='nav-input'>
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search for anything'/>
                     <img src={Search} style={{position:'absolute', top:'0', right:'0', bottom:'auto', background:'#39CDCC', padding:'11px 14px', borderTopRightRadius: '4px', borderBottomRightRadius:'4px'}} alt='search'/>
                </div> */}
            </div>
            <div className="dashboard__nav-right">
                <div className='dashboard__nav-notify'>
                    <span style={{ marginRight: '4px' }}>Docs</span>
                    <img src={Bell} alt='bell' />
                </div>
                <div className='dashboard__nav-user'>
                    <div className='dashboard__user-img'>
                        <span style={{ color: 'white', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>{firstName[0]}{lastName[0]}</span>
                    </div>
                    <span style={{ textTransform: 'uppercase', fontSize: '.7em' }}>{firstName} {lastName}</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar