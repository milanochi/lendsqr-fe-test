import { useState, useEffect } from 'react'
import Pagination from './Pagination'
import UserDashboardDisplay from './UserDashboardDisplay'
import UserFilter from './UserFilter'
import Filter from '/src/assets/dashboard/Filter.svg'


const UserDashboard = () => {
  const [submit, setSubmit] = useState(false)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [actions, setActions] = useState(false)

  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        return data

      }

    }
    catch (err) {
      console.log(err)
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

  return (
    <>
      <section className='info'>
        <div style={{ position: 'relative' }}>
          <table>
            <thead>
              <tr>
                <td className='dots'>ORGANIZATION</td>
                <td className='dots'>USERNAME</td>
                <td className='dots'>EMAIL</td>
                <td className='dots'>PHONE NUMBER</td>
                <td className='dots'>DATE JOINED</td>
                <td className='dots'>STATUS</td>

                {/* <td>ORGANIZATION<img src={Filter} onClick={showFilter} className='dots' alt='filter' /></td>
                <td>USERNAME<img src={Filter} onClick={showFilter} className='dots' alt='filter' /></td>
                <td>EMAIL<img src={Filter} onClick={showFilter} className='dots' alt='filter' /></td>
                <td>PHONE NUMBER<img src={Filter} onClick={showFilter} className='dots' alt='filter' /></td>
                <td>DATE JOINED<img src={Filter} onClick={showFilter} className='dots' alt='filter' /></td>
                <td>STATUS<img src={Filter} onClick={showFilter} className='dots' alt='filter' /></td> */}
              </tr>
            </thead>
            <tbody>
              {
                currentItems.map((user, index) => <UserDashboardDisplay key={index} users={user} actions={actions} setActions={setActions} />)
              }
            </tbody>
          </table>
          {
            submit && <UserFilter />
          }
        </div>
      </section>
      <Pagination user={users} add={Add} handleTotalPage={handleTotalPage} pageCount={pageCount} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setItemOffset={setItemOffset} />
    </>
  )
}
export default UserDashboard