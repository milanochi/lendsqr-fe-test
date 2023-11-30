import { useState, useEffect } from 'react'
import Pagination from './Pagination'
import Table from './Table'
import { useNavigate } from 'react-router'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

//FETCH USERS
const BASE_URL = import.meta.env.VITE_API_URL
const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}`)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      return data
    }
  }
  catch (err) {
    console.error(err)
  }
}


const UserDashboard = () => {
  const navigate = useNavigate()

  function toSubscriptions() {
    navigate('/subscriptions')
  }

  const [currentItems, setCurrentItems] = useState([])

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      console.log(usersFromServer)

      setUsers(usersFromServer)
      setLoading(false)
    }
    getUsers()
  }, [])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage))

  }, [itemOffset, itemsPerPage, users])

  //LOADING
  if (loading) {
    return <div style={{ color: '#213F7D', textAlign: 'center' }}>
      <h4>Loading...</h4>
      <Skeleton count={7} style={{ marginTop: '.9rem', height: '30px' }} />
    </div>
  }
  if (currentItems.length === 0) {
    return <h4>No data found</h4>
  }
  const tableHeaders = [
    {
      id: 1,
      heading: 'ORGANIZATION',
      body: 'orgName'
    },
    {
      id: 2,
      heading: 'USERNAME',
      body: 'userName'
    },
    {
      id: 3,
      heading: 'EMAIL',
      body: 'email'
    },
    {
      id: 4,
      heading: 'PHONE NUMBER',
      body: 'phoneNumber'
    },
    {
      id: 5,
      heading: 'DATE JOINED',
      body: 'createdAt'
    },
    {
      id: 6,
      heading: 'STATUS',
      body: 'Default'
    },


  ]

  return (
    <>
      <div className='table-header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <p style={{ fontWeight: '500', color: '#213F7D' }}>Users</p>
        <button onClick={toSubscriptions} type='button' className='view'>View All</button>
      </div>

      <Table headers={tableHeaders} data={currentItems} loading={loading} />
    </>
  )
}
export default UserDashboard