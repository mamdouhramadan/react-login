import React from 'react'
import { connect } from 'react-redux'

const UserInfo = ({user}) => {
    console.log('dashboard props : ',user);

    return (
        <div className="user-info text-center">
            <div className="user-avatar">
                <img src={require('./../../../Images/user-avatar.png').default} alt="user avatar" />
            </div>

            <h6 className="user-name mt-3">Welcome Back!!</h6>
            <p className="user-name">{user?.email || 'You are Not Authorized'}</p>
        </div>
    )
}


export default connect(state => { return { user: state } }, null)(UserInfo)