import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../Components/Button';
import Input from '../../Components/Input';
import './LoginScreen.css';
export default function LoginScreen() {

    const [isLogin, setIsLogin] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate('/dashboard');
            return;
        }

    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form className="form my-5 p-5 border bg-white login-form">
                    <img className="form-logo" src={require('./../../Images/logo-2.png').default} alt="img" />
                    <Input type="email" placeholder="Enter  Email Address" />
                    <Input type="password" placeholder="Enter  Password" />
                    <div className="row align-items-center">
                        <a href="#!" className="w-50 text-capitalize">lost Password? </a>
                        <Button className="w-50"><Link to="/dashboard">Login</Link></Button>
                    </div>
                </form>

            </div>
        </div>
    )
}
