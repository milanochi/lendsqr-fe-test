import React, { useRef } from 'react'
import TableData from './TableData'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


type TableDataType = {
    headers: any[]
    data: any
    loading: boolean
    pdf?: any
}
const Table = ({ headers, data, loading, pdf }: TableDataType) => {

    //LOADING
    if (loading) {
        return <div style={{ color: '#213F7D', textAlign: 'center' }}>
            <h4>Loading...</h4>
            <Skeleton count={10} style={{ marginTop: '.9rem', height: '30px' }} />
        </div>
    }
    if (data.length === 0) {
        return <h4>No data found</h4>
    }

    return (
        <div className='info' style={{ marginBottom: '1rem' }} >
            <div style={{ position: 'relative' }} ref={pdf}>
                <table>
                    <thead>
                        <tr>{
                            headers.map((elem, index) => {
                                return (
                                    <td key={index}>{elem.heading}</td>
                                )
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user: { userName: string }[], index: number) => {
                                return <TableData users={user} headers={headers} key={index} />
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default Table