import { Navigate } from 'react-router'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'
import Avatar from '/src/assets/user/avatar.svg'
import Back from '/src/assets/user/back.svg'
import Fstar from '/src/assets/user/fstar.svg'
import Star from '/src/assets/user/star.svg'
import { useNavigate } from 'react-router'

const UserDetails = () => {
  const nav = useNavigate()

  return (
    <div className='dashboard'> 
      <NavBar />
      <Menu />
      {/* USER DETAILS */}
      <main className='user'>
        <div className='user__inner'>
            <div className='user__header'>
              <p>
                <img src={Back} onClick={() => nav(-1)}alt='back' style={{marginRight: '8px', cursor: 'pointer'}}/>
                Back to Users
                </p>
              <div>
                <h2>User Details</h2>
                <span>
                  <button style={{ color:'#E4033B', borderColor: '#E4033B'}}>BLACKLIST USER</button>
                  <button style={{ color:'#39CDCC', borderColor: '#39CDCC'}}>ACTIVATE USER</button>
                </span>
              </div>
            </div>
            <section>
              <div className='user__info'>
                <div style={{display:'flex', alignItems:'center'}}>
                <img src={Avatar} alt='avatar' style={{marginRight:'8px'}} className='avatar'/>
                  <div>
                    <p>Grace Effiong</p>
                    <small>LSQFf587g90</small>
                </div>
              </div>
               
                <div style={{lineHeight: '1.9', marginTop: '.6rem', textAlign:'center', borderLeft:'1px solid rgba(84, 95, 125, 0.2)', borderRight: '0.2px solid rgba(84, 95, 0.225, 0.2)'}}>
                  <small>Users Tier</small>
                  <span style={{display: 'block'}}>
                  <img src={Fstar} alt='star' /> 
                  <img src={Star} alt='star' />
                  <img src={Star} alt='star' />
                  </span>
                </div>
                <div>
                  <p>₦200,000.00</p>
                  <small>9912345678/Providus Bank</small>
                </div>
              </div>
              <ul>
                <li>General details</li>
                <li>Documents</li>
                <li>Bank details</li>
                <li>Loans</li>
                <li>Savings</li>
                <li>App and System</li>
              </ul>
              
            </section>
            <div className='user__details'>
               <div className='user__section'>
                <h3>Personal Information</h3>
                <div className='user__details-inner'>
                  <div>
                    <p>FULL NAME</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>PHONE NUMBER</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>EMAIL ADDRESS</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>BVN</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>GENDER</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>MARITAL STATUS</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>CHILDREN</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>TYPE OF RESIDENCE</p>
                    <h3>Grace Effiong</h3>
                  </div>
                </div>
               </div>
               <div className='user__section'>
                <h3>Education and Employment</h3>
                <div className='user__details-inner2'>
                  <div>
                    <p>FULL NAME</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>PHONE NUMBER</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>EMAIL ADDRESS</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>BVN</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>GENDER</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>MARITAL STATUS</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>CHILDREN</p>
                    <h3>Grace Effiong</h3>
                  </div>
                </div>
               </div>
               <div className='user__section'>
                <h3>Socials</h3>
                <div className='user__details-inner'>
                  <div>
                    <p>FULL NAME</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>PHONE NUMBER</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>EMAIL ADDRESS</p>
                    <h3>Grace Effiong</h3>
                  </div>
                </div>
               </div>
               <div className='user__section'>
                <h3>Guarantor</h3>
                <div className='user__details-inner'>
                  <div>
                    <p>FULL NAME</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>PHONE NUMBER</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>EMAIL ADDRESS</p>
                    <h3>Grace Effiong</h3>
                  </div>
                  <div>
                    <p>PHONE NUMBER</p>
                    <h3>Grace Effiong</h3>
                  </div>
                </div>
               </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default UserDetails