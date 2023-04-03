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
    <div>
        <ul style={{position:'absolute',top:'23%', right: '-3%', fontSize: '14px', backgroundColor: '#FFFFFF',boxShadow: '3px 5px 20px rgba(0, 0, 0, 0.04)' ,color: '#545F7D', borderRadius: '4px' ,display:'flex', lineHeight: '2' ,flexDirection: 'column', alignItems:'center' ,justifyContent: 'center', height: '130px', listStyle:'none', width: '180px'}}>
          <li style={{cursor:'pointer'}} onClick={toUserDetails}>
            <img src={Eye} style={{marginRight: '5px'}}alt='activate'/>
            View details</li>
          <li style={{cursor:'pointer'}} >
            <img src={Blacklist} alt='activate'/>
            BlackList User</li>
          <li style={{cursor:'pointer'}} >
            <img src={User} alt='user'/>
            Activate User</li>
        </ul>
    </div>
  )
}

export default UserActions