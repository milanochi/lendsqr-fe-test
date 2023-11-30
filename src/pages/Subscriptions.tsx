import React, { useEffect, useState, useCallback, useRef } from 'react'
import NavBar from '../components/NavBar'
import Menu from '../components/Menu'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import Pagination from '../components/Pagination'
import Table from '../components/Table';
import Modal from '../components/Modal';
import { FaFileDownload, FaFilter } from 'react-icons/fa';
import InputElement from '../components/InputElement';
import { useAppContext } from '../context/AppContext';
import JsPDF, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
Chart.register(CategoryScale);

type User = {
    userName: string;
    createdAt: string;
}
//FETCH USERS
const BASE_URL = import.meta.env.VITE_API_URL;
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Months",
            backgroundColor: '#B7EDDB',
            hoverBackgroundColor: '#4BD3A5',
            borderRadius: 3,
            data: [9000, 1000, 5000, 3000, 2000, 5000, 15000],
        },
    ],
};
const barOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: -4
            }
        }
    }
}
//Doughnut
const pieLabels = ["Active", "Inactive"];
const pieData = {
    labels: pieLabels,
    datasets: [
        {
            backgroundColor: ['#4BD3A5', '#B7EDDB'],
            data: [40, 60],
        },
    ],
};
const pieOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'left',
            labels: {
                boxWidth: 20,
                boxHeight: 8,
                font: {
                    family: 'Rubik',
                    size: '14px'
                }
            }
        }
    }
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
const fetchUsers = async () => {
    try {
        const res = await fetch(`${BASE_URL}`)
        if (res.ok) {
            const data = await res.json()
            return data
        }
    }
    catch (err) {
        console.log(err)
    }
}

const PerPageOption = [10, 20, 30, 40, 50]

const Subscriptions = () => {

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(PerPageOption[0]);

    const { username, status, date, filteredData, setFilteredData } = useAppContext()
    const [usernameFilter, setUsernameFilter] = useState(username)
    const [statusFilter, setStatusFilter] = useState(status)
    const [dateFilter, setDateFilter] = useState(date)
    const [filteredUsers, setFilteredUsers] = useState<typeof users>([])

    useEffect(() => {
        const getUsers = async () => {
            const usersFromServer = await fetchUsers()
            setUsers(usersFromServer)
            setFilteredUsers(usersFromServer)
            setLoading(false)
        }
        getUsers()
    }, [])
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setFilteredData(filteredUsers.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredUsers.length / itemsPerPage))

    }, [itemOffset, itemsPerPage, filteredUsers])

    const [isModalOpen, setModalOpen] = useState(false)

    const handleFilterSubmit = useCallback((e: any) => {
        e.preventDefault()
        // if (username === '' || status === '' || date === '') {
        //     alert('Fill in form data')
        // }
        console.log(users)
        const result = users.filter((row) => {
            if (row.userName.toLowerCase().includes(usernameFilter.toLowerCase())) {
                return row
            }
        }
        );
        console.log(result)
        setFilteredUsers(result);
        setModalOpen(false)

    }, [usernameFilter, users, setFilteredUsers])

    function clearFilter(e: any) {
        e.preventDefault()
        setUsernameFilter('')
        setDateFilter('')
        setModalOpen(false)

    }
    const pdfRef = useRef();

    const downloadPdf = () => {
        const input: any = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('Subscriptions.pdf')
        })
    }

    return (
        <>
            <div className='dashboard' style={{ overflowX: 'hidden' }}>
                {isModalOpen && (
                    <Modal onClose={() => setModalOpen(false)} header={'Filter'}>

                        <form onSubmit={handleFilterSubmit}>

                            <div className='modal-children'>
                                <InputElement value={usernameFilter} element={'input'} name={'username'} type={'text'} label={'Username'} holder={'Enter User Name'} onChange={e => setUsernameFilter(e.target.value)} />

                                <InputElement value={statusFilter} element={'input'} name={'status'} type={'text'} label={'Status'} holder={'Enter Status'} onChange={e => setStatusFilter(e.target.value)} />

                                <InputElement value={dateFilter} element={'input'} name={'date'} type={'date'} label={'Date Joined'} holder={'Enter Date'} onChange={e => setDateFilter(e.target.value)} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                                <div>
                                    <button onClick={clearFilter} className='clear' style={{ marginRight: '10px' }}>Clear</button>
                                    <button type="submit" className='view'>Filter</button>
                                </div>

                            </div>

                        </form>
                    </Modal>
                )}
                <NavBar page={'Subscriptions'} />
                <Menu />

                <main>
                    <div className='main-inner'>

                        <section className='responsive' style={{ justifyContent: 'space-between', display: 'flex', minHeight: '300px', marginTop: '1rem', marginBottom: '1rem', width: '100%' }}>

                            <div className='bar' style={{ background: 'white', borderRadius: '5px', padding: '15px', marginRight: '12px' }}>
                                <div style={{ marginBottom: '10px' }}>
                                    <p style={{ fontSize: '.9em', fontWeight: '500' }}>Monthly Stats</p>
                                </div>
                                <div style={{ height: '240px' }}>
                                    <div style={{ height: '100%' }}>
                                        <Bar data={data} options={barOptions} />
                                    </div>
                                </div>
                            </div>

                            <div className='pie' style={{ minHeight: '300px', background: 'white', padding: '15px', borderRadius: '5px' }}>
                                <div>
                                    <p style={{ fontSize: '.9em', fontWeight: '500' }}>Total Subscriptions</p>
                                    <h4 style={{ fontSize: '1.8rem' }}>100</h4>
                                </div>

                                <div style={{ height: '240px', marginTop: '-1.2rem' }}>
                                    <div style={{ height: '100%' }}>
                                        <Doughnut data={pieData} options={pieOptions} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='table-header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h4 style={{ color: '#545F7D' }}>Clients</h4>
                            <div>
                                <button onClick={() => setModalOpen(true)} type='button' className='view' style={{ marginRight: '15px' }}>
                                    <FaFilter style={{ fontSize: '10px', marginRight: '4px' }} />Filter
                                </button>

                                <button type='button' className='view' onClick={downloadPdf}>
                                    <FaFileDownload style={{ fontSize: '10px', marginRight: '4px' }} />Export
                                </button>
                            </div>

                        </div>
                        <Table headers={tableHeaders} data={filteredData} loading={loading} pdf={pdfRef} />

                        <Pagination loading={loading} user={filteredData} add={PerPageOption} pageCount={pageCount} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setItemOffset={setItemOffset} />
                    </div>
                </main>
            </div>
        </>
    )
}

export default Subscriptions