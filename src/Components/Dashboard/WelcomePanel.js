import React from 'react'
import { connect } from 'react-redux'

const WelcomePanel = ({ user }) => {
    return (
        <div className="welcome-banner border d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h4>Welcome Back !</h4>
                <h6>{user?.email || 'You are Not Authorized'}</h6>
            </div>

        </div>
    )
}

export default connect(state => { return { user: state } }, null)(WelcomePanel)