import Dots from '/src/assets/dashboard/dots.svg'
import { ValidTime } from '../utilities/ValidTime'
import { ValidPhoneNumber } from '../utilities/ValidPhoneNumber'
import UserActions from './UserActions'

type Users = {
  users: any
  setActions: (T: boolean) => void
  actions: boolean
  index?: number
  }

const UserDashboardDisplay = ({users, setActions, actions} : Users ) => {
//GO TO USER DETAILS
const userDetails = (id: number | string) => {
  if(users.id === id) {
    setActions(!actions)
  }
      console.log('delete', id)
  }
  return ( 
        <tr>
            <td>{users.orgName}</td>
            <td>{users.userName}</td>
            <td>{users.email}</td>
            <td>{ValidPhoneNumber(users.phoneNumber)}</td>
            <td>{ValidTime(users.createdAt)}</td>
            <td><span className='status'>Active</span></td>
            {/* <td><img src={Dots} className='dots' onClick={() => userDetails(users.id)} alt='dots'/>
            {
            actions && <UserActions/>
            }
            </td> */}
        </tr>
  )
}

export default UserDashboardDisplay