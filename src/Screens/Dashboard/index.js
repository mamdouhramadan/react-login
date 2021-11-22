import React from 'react'
import Header from '../../Components/Dashboard/Header'
import Sidebar from '../../Components/Dashboard/Sidebar'
import DashboardScreens from './DashboardScreens'
import './dashboard.css';

export default function Dashboard() {
    return (
        <div>

            <Header />
            <div className="main">
                <Sidebar />
                <DashboardScreens />
            </div>
        </div>
    )
}
