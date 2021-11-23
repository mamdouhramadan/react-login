import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import './LoginScreen.css';
import LoginAuth from './../../API/LoginAPI';
import Validation from '../../Functions/Validation';

const LoginScreen = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false)

    const HandleLoginForm = async (e) => {

        e.preventDefault();

        const data = { email, password };

        const isValid = Validation(data, setErrors);

        isValid && await LoginAuth(data, setErrors, navigate, setLoading)

    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form onSubmit={HandleLoginForm} className="form my-5 p-5 border bg-white login-form">
                    <img className="form-logo" src={require('./../../Images/logo-2.png').default} alt="img" />
                    <Input
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                    <Input
                        type="password"
                        placeholder="Enter  Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    {errors &&
                        <Fade bottom >
                            <p className='alert alert-danger p-2 py-3 text-center text-capitalize'>{errors}</p>
                        </Fade>
                    }
                    <div className="row align-items-center">
                        <a href="#!" className="w-50 text-capitalize">lost Password? </a>
                        <Button disabled={loading} className="w-50" type="submit" color="primary">Login</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default LoginScreen