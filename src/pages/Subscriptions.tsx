import React, { useEffect, useState } from 'react'
import UserDashboard from '../components/UserDashboard'
import NavBar from '../components/NavBar'
import Menu from '../components/Menu'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import Pagination from '../components/Pagination'
import Table from '../components/Table';
Chart.register(CategoryScale);

const Subscriptions = () => {

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
    const BASE_URL = import.meta.env.VITE_API_URL;

    const fetchUsers = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${BASE_URL}`)
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
            <div className='dashboard' style={{ overflowX: 'hidden' }}>
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
                        <Table headers={tableHeaders} data={currentItems} loading />

                        <Pagination loading user={users} add={Add} handleTotalPage={handleTotalPage} pageCount={pageCount} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setItemOffset={setItemOffset} />
                    </div>
                </main>


            </div>
        </>
    )
}

export default Subscriptions