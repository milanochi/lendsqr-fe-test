import { useState, useEffect } from 'react'
import Pagination from './Pagination'
import UserDashboardDisplay from './UserDashboardDisplay'
import UserFilter from './UserFilter'
import Filter from '/src/assets/dashboard/Filter.svg'
import UserActions from './UserActions'



const UserDashboard = () => {
  const [submit, setSubmit] = useState(false)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [actions, setActions] = useState(false)

  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10;

  const [userPerPage, setUserPerPage] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const Add = userPerPage.map(add => add)
  const handleTotalPage = ({ e } : any) => alert(userPerPage[e.target.value])



  useEffect(() => {
    const getTasks = async () => {
      const usersFromServer = await fetchUsers()
    
      console.log(usersFromServer)
      setUsers(usersFromServer)
      setLoading(false)
    }
    getTasks()
  }, [])

  useEffect(() => {
  const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(users.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(users.length / itemsPerPage))

}, [itemOffset, itemsPerPage, users])

  //FETCH USERS
  
    const fetchUsers = async () => {
      setLoading(true)
      try{
        const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        if (res.ok) {
        const data = await res.json()
        return data
        }
      }
      catch(err){
        console.log(err)
      }
    }
  
  //SHOW FILTER
  const showFilter = () =>{
    setSubmit(!submit)
  }
  //LOADING
  if (loading) {
    return <h3 style={{color: '#213F7D', textAlign:'center'}}>LOADING...</h3>
  }
  return (
    <div>
       {/* MAIN DASHBOARD */}
       <section className='info'>
         <div style={{position: 'relative'}}>
          <table>
            <thead>
              <tr>
                <td>ORGANIZATION<img src={Filter} onClick={showFilter} className='dots' alt='filter'/></td>
                <td>USERNAME<img src={Filter} onClick={showFilter} className='dots' alt='filter'/></td>
                <td>EMAIL<img src={Filter} onClick={showFilter} className='dots' alt='filter'/></td>
                <td>PHONE NUMBER<img src={Filter} onClick={showFilter} className='dots' alt='filter'/></td>
                <td>DATE JOINED<img src={Filter}onClick={showFilter}  className='dots' alt='filter'/></td>
                <td>STATUS<img src={Filter} onClick={showFilter} className='dots' alt='filter'/></td>
              </tr>
            </thead>
            {
            currentItems.map((user, index) =>  <UserDashboardDisplay key={index} users={user} actions={actions} setActions={setActions}/>)
            }
          </table>
          {
            submit && <UserFilter />
          }
           {
            actions && <UserActions />
           }
           </div>
        </section>
        <Pagination users={users} add={Add} handleTotalPage={handleTotalPage} pageCount={pageCount} itemsPerPage={itemsPerPage} setItemOffset={setItemOffset} currentItems={currentItems}/>
    </div>
  )
}

export default UserDashboard