import React from 'react'
import UserDashboard from '../components/UserDashboard'
import DashboardAccent from './DashboardAccent'

const MainDashboard = () => {
    return (
        <div>
            <main>
                <div className='main-inner'>
                    <h3>Users</h3>
                    <DashboardAccent />
                    <UserDashboard />
                </div>

            </main>
        </div>
    )
}

export default MainDashboard