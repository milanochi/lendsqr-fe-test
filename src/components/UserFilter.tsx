import { useState } from 'react'

const UserFilter = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [organization, setOrganization] = useState('Lendsqr')
    const [status, setStatus] = useState('Active')
  return (
    <div>
        <div className='filter'> 
            <form>
                <label>Organization</label>
                 <select>
                    <option value={organization}>Select</option>
                </select>
                <div>
                    <label>Username</label>
                    <input value={username} type='text' placeholder='User' onChange={e => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input value={email} type='email' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Date</label>
                    <input value={date} type='date' placeholder='Date' onChange={e => setDate(e.target.value)}/>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input value={phoneNumber} type='text' placeholder='Phone Number' onChange={e => setPhoneNumber(e.target.value)}/>
                </div>
                <label>Status</label>
                <select>
                    <option value={status}>Select</option>
                </select>
                <div className='btn'>
                    <span style={{border: '1px solid #545F7D', color: '#545F7D'}}>Reset</span>
                    <span style={{backgroundColor: '#39CDCC',border: '1px solid #39CDCC', color: 'white' }}>Filter</span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserFilter