import React from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import './LoginScreen.css';

export default function LoginScreen() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <form className="form my-5 p-5 border bg-white login-form">
                    <img className="form-logo" src={require('./../../Images/logo.png').default} alt="img" />
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
