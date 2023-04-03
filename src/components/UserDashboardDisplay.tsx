import Dots from '/src/assets/dashboard/dots.svg'
import { ValidTime } from '../utilities/ValidTime'
import { ValidPhoneNumber } from '../utilities/ValidPhoneNumber'



type Users = {
    id: number
    orgName: string
    userName: string
    email: string
    phoneNumber: string
    createdAt: string
    status: string
    setActions: any
    actions: any
  }
const UserDashboardDisplay = ({ id, orgName, userName, email, phoneNumber, createdAt, status, setActions, actions } : Users ) => {
//GO TO USER DETAILS
const userDetails = () => {
      setActions(!actions)
  }
  return ( 
  
    <tbody>
        <tr>
            <td>{orgName}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{ValidPhoneNumber(phoneNumber)}</td>
            <td>{ValidTime(createdAt)}</td>
            <td><span className='status'>Active</span></td>
            <td><img src={Dots} className='dots' onClick={userDetails} alt='dots'/></td>
        </tr>
    </tbody>

  )
}

export default UserDashboardDisplay