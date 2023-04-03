import OrgLeft from '/src/assets/menu/org-left.svg'
import Arrow from '/src/assets/menu/org-right.svg'
import Home from '/src/assets/menu/home.svg'

const Menu = () => {
  return (
    <div>
         {/* LEFT NAVIGATION MENU */}
         <aside className='menu'>
          <div className='menu__inner'>
            <div className='menu__header'>
              <div className='menu__org'>
                <img src={OrgLeft} alt='briefcase' />
                <a href='#' style={{textDecoration: 'none'}}>
                <div>Switch Organizations</div>
                  </a> 
                <img src={Arrow} alt='downarrow' />
              </div>
              <div className='menu__org'>
                <img src={Home} alt='home' />
                <div>
                  <a href='#' style={{textDecoration: 'none'}}>
                    <div>Dashboard</div>
                    </a>
                 </div>
              </div>
            </div>

            <ul className='menu__list'>
              <h3>Customers</h3>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Users</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Guarantors</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Loans</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Decision models</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Savings</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Loan Requests</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>White list</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Karma</li>
              </div>
            </ul>

            {/* SECOND NAV SECTION */}
            <ul className='menu__list' style={{marginTop: '1rem'}}>
              <h3>Businesses</h3>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Users</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Guarantors</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Loans</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Decision models</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Savings</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Loan Requests</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>White list</li>
              </div>
              <div style={{display: 'flex'}}>
                <img src={OrgLeft} alt='briefcase' />
                <li style={{marginLeft: '5px', marginRight: '5px'}}>Karma</li>
              </div>
            </ul>
          </div>
        </aside>
    </div>
  )
}

export default Menu