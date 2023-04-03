import Dots from '/src/assets/dashboard/dots.svg'
import { ValidTime } from '../utilities/ValidTime'
import { ValidPhoneNumber } from '../utilities/ValidPhoneNumber'



// type Users = {
//     id: number
//     orgName: string
//     userName: string
//     email: string
//     phoneNumber: string
//     createdAt: string
//     status: string
//     setActions: any
//     actions: any
//   }
const UserDashboardDisplay = ({users,  setActions, actions} : any ) => {
//GO TO USER DETAILS
const userDetails = () => {
      setActions(!actions)
  }
  return ( 
  
    <tbody>
        <tr>
            <td>{users.orgName}</td>
            <td>{users.userName}</td>
            <td>{users.email}</td>
            <td>{ValidPhoneNumber(users.phoneNumber)}</td>
            <td>{ValidTime(users.createdAt)}</td>
            <td><span className='status'>Active</span></td>
            <td><img src={Dots} className='dots' onClick={userDetails} alt='dots'/></td>
        </tr>
    </tbody>

  )
}

export default UserDashboardDisplay