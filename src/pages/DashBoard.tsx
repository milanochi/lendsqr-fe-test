import Icon1 from '/src/assets/section/sect-ico1.svg'
import Icon2 from '/src/assets/section/sect-ico2.svg'
import Icon3 from '/src/assets/section/sect-ico3.svg'
import Icon4 from '/src/assets/section/sect-ico4.svg'
import UserDashboard from '../components/UserDashboard'
import NavBar from '../components/NavBar'
import Menu from '../components/Menu'


const DashBoard = () => {
  
  return (
    <div className="dashboard">
      <NavBar />
      <Menu />
       
        {/* MAIN DASHBOARD */}
        <main>
         <div className='main-inner'>
           <h3>Users</h3>
           <div className='main-section'>
             <section>
               <div>
                 <img src={Icon1} alt='icon'/>
                 <p>USERS</p>
                 <h2>2,453</h2>
               </div>
             </section>
             <section>
               <div>
                 <img src={Icon2} alt='icon'/>
                 <p>ACTIVE USERS</p>
                 <h2>2,453</h2>
               </div>
             </section>
             <section>
               <div>
                 <img src={Icon3} alt='icon'/>
                 <p>USERS WITH LOANS</p>
                 <h2>12,453</h2>
               </div>
             </section>
             <section>
               <div>
                 <img src={Icon4} alt='icon'/>
                 <p>USERS WITH SAVINGS</p>
                 <h2>102,453</h2>
               </div>
             </section>
           </div>
            <UserDashboard/>
         </div>
        
        </main>
    </div>
  )
}

export default DashBoard