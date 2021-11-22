import React, { useEffect } from 'react';
import LoginAuth from '../../API/LoginAuth';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import './LoginScreen.css';
export default function LoginScreen() {


    useEffect(() => {
        LoginAuth();
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
                        <Button className="w-50">Login</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}
