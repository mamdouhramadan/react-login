import React from 'react'

export default function UserInfo() {
    return (
        <div className="user-info text-center">
            <div className="user-avatar">
                <img src={require('./../../../Images/user-avatar.png').default} alt="user avatar" />
            </div>

            <h6 className="user-name mt-3">Welcome Back!!</h6>
            <p className="user-name">mamdouh@gmail.com</p>
        </div>
    )
}
