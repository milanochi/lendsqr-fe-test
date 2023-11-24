import React from 'react'
import TableData from './TableData'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type TableDataType = {
    headers: any[]
    data: any
    loading: boolean
}
const Table = ({ headers, data, loading }: TableDataType) => {
    //LOADING
    if (loading && data.length === 0) {
        return <div style={{ color: '#213F7D', textAlign: 'center' }}>
            <h4>Loading...</h4>
            <Skeleton count={10} style={{ marginTop: '1rem' }} />
        </div>
    }

    return (
        <div className='info' style={{ marginBottom: '1rem' }}>
            <div style={{ position: 'relative' }}>
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
                            data.map((user: any, index: number) => {
                                return <TableData users={user} headers={headers} key={index} />
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default Table