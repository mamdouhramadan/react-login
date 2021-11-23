import React, { useEffect } from 'react'
import Header from '../../Components/Dashboard/Header'
import Sidebar from '../../Components/Dashboard/Sidebar'
import DashboardScreens from './DashboardScreens'
import './dashboard.css';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';

const Dashboard = ({ user }) => {
    const goTo = useNavigate()

    useEffect(() => {
        document.title = "Dashboard Page"
        user === '' && goTo('/');

    }, [user, goTo])



    return (
        <div id="page">
            <Header />
            <div className="main">
                <Sidebar />
                <DashboardScreens />
            </div>
        </div>
    )
}

export default connect(state => { return { user: state } }, null)(Dashboard)