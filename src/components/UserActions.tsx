import { useNavigate } from 'react-router'
import Eye from '/src/assets/section/eye.svg'
import Blacklist from '/src/assets/section/blacklist icon.svg'
import User from '/src/assets/section/activate icon.svg'
const UserActions = () => {

const navigate = useNavigate()
//SUBMIT FORM
const toUserDetails = ( e:any ) => {
    e.preventDefault()
    navigate('/details')
    
}
  return (
    <div style={{position:'absolute',top:'23%', right: '-3%', fontSize: '14px', backgroundColor: '#FFFFFF',boxShadow: '3px 5px 20px rgba(0, 0, 0, 0.04)' ,color: '#545F7D', borderRadius: '4px', height: '130px', listStyle:'none', width: '180px'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',lineHeight:'2', height:'100%'}}>
          <ul style={{marginRight:'5px', cursor:'pointer', textAlign:'center'}}>
            <li style={{listStyle:'none'}} onClick={toUserDetails}>
              <img src={Eye} alt='activate'/>
            </li>
            <li style={{listStyle:'none'}} >
              <img src={Blacklist} alt='activate'/>
            </li>
            <li style={{listStyle:'none'}} >
              <img src={User} alt='user'/>
            </li>
          </ul>

          <ul style={{ cursor:'pointer'}}>
            <li style={{listStyle:'none'}} onClick={toUserDetails}>View Details</li>
            <li style={{listStyle:'none'}}>Blacklist User</li>
            <li style={{listStyle:'none'}}>Activate User</li>
          </ul>
        </div>
       
    </div>
  )
}

export default UserActions