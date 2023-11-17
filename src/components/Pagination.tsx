import PrevBtn from '/src/assets/section/prev btn.svg'
import NextBtn from '/src/assets/section/next btn.svg'
import ReactPaginate from 'react-paginate'
import { useState  } from 'react'

interface Paginate {
  user: number
  pageCount: number
  itemsPerPage: number
  setItemsPerPage: number | any
  setItemOffset: number | any
  handleTotalPage: ( T: any ) => void
  add: number []
}
const Pagination = ({user, pageCount, itemsPerPage, setItemsPerPage,setItemOffset, handleTotalPage, add }: Paginate) => {

  const [value, setValue] = useState("Select ...");

  // Invoke when user click to request another page.
  const handlePageClick = ({ selected }: any) => {
    setItemOffset(selected);
  };

  function handleDropDownPage() {
      setItemsPerPage(value)
  }
  handleDropDownPage()

  return (
    <>
    <div className='paginate' style={{display: 'flex', alignItems:'center', justifyContent: 'space-between', background: 'whitesmoke'}}>
     <section style={{display: 'flex', fontSize: '14px', color: '#545F7D', lineHeight: '2'}}>
      <p style={{marginRight: '10px'}}>Showing</p>
      <select value={value} onChange={e => setValue(e.currentTarget.value)} style={{marginRight: '10px', fontFamily: 'Work Sans', borderRadius: '4px', padding: '0 8px', color: '#213F7D', background: 'rgba(33, 63, 125, 0.1', border: 'none', outline: '1px solid $primary-color'}}>
      {
        add.map((num, index) => <option key={index} value={num} 
        // add.map((num, index) => <option key={index} value={num} {...(num === itemsPerPage ? { selected: true }: {})}
        >{num}</option>)
      }
      </select>
      <p>out of {user}</p>
    </section>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<img src={NextBtn} alt='next'/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel={<img src={PrevBtn} alt='prev' />}
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName = 'page-num'
        activeLinkClassName = 'active'
        />
    </div>
    </>
  );
}
export default Pagination;