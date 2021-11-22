import React from 'react'
import NavMenu from './NavMenu';
import './sidebar.css';
import UserInfo from './UserInfo';

export default function Sidebar() {
    return (
        <div className="dashboard-sidebar sidebar">
            <UserInfo />
            <NavMenu />
        </div>
    )
}
