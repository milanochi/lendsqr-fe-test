import { ValidTime } from '../utilities/ValidTime'
import { ValidPhoneNumber } from '../utilities/ValidPhoneNumber'

type TableDataProps = {
    users: any
    headers: any[]
}

const TableData = ({ users, headers }: TableDataProps) => {

    return (

        <tr>
            {headers.map((header, index) => {
                if (header.body === 'Default') {
                    return <td><span key={index} className='status'>Active</span></td>
                }
                else if (header.body === 'phoneNumber') {
                    return <td key={index}>{ValidPhoneNumber(users[`${header.body}`])}</td>;
                }

                else if (header.body === 'createdAt') {
                    return <td key={index}>{ValidTime(users[`${header.body}`])}</td>;
                }
                else {
                    return <td key={index}>{users[`${header.body}`]}</td>;
                }

            })}
        </tr>

    )
}

export default TableData