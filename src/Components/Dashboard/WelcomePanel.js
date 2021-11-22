import React from 'react'

export default function WelcomePanel({ email }) {
    return (
        <div className="welcome-banner border d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h4>Welcome Back !</h4>
                <h6>{email}</h6>
            </div>

        </div>
    )
}
