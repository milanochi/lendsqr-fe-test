import { useState, useEffect } from 'react'
import Pagination from './Pagination'
import Table from './Table'
import UserDashboardDisplay from './UserDashboardDisplay'
import UserFilter from './UserFilter'
import Filter from '/src/assets/dashboard/Filter.svg'
import { useNavigate } from 'react-router'


const UserDashboard = () => {
  const navigate = useNavigate()

  function toSubscriptions() {
    navigate('/subscriptions')
  }

  const [submit, setSubmit] = useState(false)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [actions, setActions] = useState(false)

  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [userPerPage, setUserPerPage] = useState([10, 20, 30, 40, 50])
  const Add = userPerPage.map(add => add)
  const handleTotalPage = ({ e }: any) => userPerPage[e.target.value]



  useEffect(() => {
    const getTasks = async () => {
      const usersFromServer = await fetchUsers()
      console.log(usersFromServer)

      setUsers(usersFromServer)
      setLoading(false)
    }
    getTasks()
  }, [])

  //FETCH USERS
  const BASE_URL = import.meta.env.VITE_API_URL

  const fetchUsers = async () => {
    setLoading(true)
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

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage))

  }, [itemOffset, itemsPerPage, users])

  //LOADING
  if (loading && currentItems.length === 0) {
    return <h3 style={{ color: '#213F7D', textAlign: 'center' }}>LOADING...</h3>
  }
  //SHOW FILTER
  // const showFilter = () => {
  //   setSubmit(!submit)
  // }
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
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={toSubscriptions} type='button' className='view'>View All</button>
      </div>

      <Table headers={tableHeaders} data={currentItems} loading />
      {
        submit && <UserFilter />
      }
    </>
  )
}
export default UserDashboard