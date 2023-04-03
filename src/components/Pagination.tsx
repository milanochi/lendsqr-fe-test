import PrevBtn from '/src/assets/section/prev btn.svg'
import NextBtn from '/src/assets/section/next btn.svg'
import ReactPaginate from 'react-paginate'

const Pagination = ({user, pageCount, itemsPerPage, setItemOffset, handleTotalPage, add }: any | number) => {

  // Invoke when user click to request another page.
  const handlePageClick = ({ selected }: any) => {
    setItemOffset(selected);
  };
  
 

  return (
    <>
    <div className='paginate' style={{display: 'flex', alignItems:'center', justifyContent: 'space-between', background: 'whitesmoke'}}>
     <section style={{display: 'flex', fontSize: '14px', color: '#545F7D', lineHeight: '2'}}>
      <p style={{marginRight: '10px'}}>Showing</p>
      <select  style={{marginRight: '10px', fontFamily: 'Work Sans', borderRadius: '4px', padding: '0 8px', color: '#213F7D', background: 'rgba(33, 63, 125, 0.1', border: 'none', outline: '1px solid $primary-color'}} onChange={e => handleTotalPage(e)}>
      {
        add.map(({add, key} : any | number) => <option key={key} value={add}>{itemsPerPage}</option>)
      }
      </select>
      <p>out of 100</p>
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