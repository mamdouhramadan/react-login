import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import './LoginScreen.css';
import LoginAuth from './../../API/LoginAPI';
import Validation from '../../Functions/Validation';
import { connect } from 'react-redux';
import { login_user } from '../../Redux/Actions';

const LoginScreen = ({ user, login_user }) => {

    const goTo = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        document.title = "Login Page"
        user.is_login && goTo('./dashboard');


    }, [user, goTo])

    const HandleLoginForm = async (e) => {

        e.preventDefault();

        const data = { email, password };

        const isValid = Validation(data, setErrors);

        isValid && await LoginAuth(data, setErrors, goTo, setLoading, login_user)

    }

    return (
        <div className="container">
            <div className="row justify-content-center login-container">
                <Fade bottom>
                    <form onSubmit={HandleLoginForm} className="form my-5 p-5 border bg-white login-form">
                        <img className="form-logo" src={require('./../../Images/logo-2.png').default} alt="img" />
                        <Input
                            autoComplete="on"
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
                        <div className="row align-items-center links-group">
                            <a href="#!" className="w-50 text-capitalize">lost Password? </a>
                            <Button disabled={loading} className="w-50" type="submit" color="primary">Login</Button>
                        </div>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default connect(state => { return { user: state } }, { login_user })(LoginScreen)