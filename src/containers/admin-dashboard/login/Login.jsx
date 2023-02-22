import React, { useEffect, useRef, useState } from 'react'
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Tooltip from '../../../assets/admin-dashboard/tooltip-icon.svg'
import { loginRoute } from '../../../services/api'
import Header from '../../../components/header/Header';
import HomePageImage from '../../../assets/admin-dashboard/login-page-image.svg'
import './login.scss'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [invalidData, setInvalidData] = useState(false)
    const [error, setError] = useState(false)
    const [username, setUsername] = useState('');
    const [count, setCount] = useState(0);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("admin") !== null) {
            navigate("/admin-dashboard");
        }
    }, [localStorage.getItem("admin")]);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
        setInvalidData(false)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        setInvalidData(false)
    }

    const handleClick = async (event) => {
        event.preventDefault();
        setLoading(true)

        if (username.length > 0 && password.length > 0) {
            try {
                const data = await loginRoute({ username: username, password: password })
                if (data.status === 200) {
                    setError(false)
                    setInvalidData(false)
                    setErrorMessage('')
                    window.localStorage.setItem('admin', data.data.token)
                    navigate('/admin-dashboard')
                }

            } catch (error) {
                setCount((prev) => prev + 1)
                setInvalidData(true)
                setErrorMessage(error.response.data);
            }
        } else {
            setError(true)
        }
        setLoading(false)
    }

    return (
        <div className='admin-sign-in-page-wrapper'>
            <Header />
            <div className='admin-sign-in-page-container'>
                <div className='admin-sign-in-page-form-wrapper'>
                    <div className='admin-sign-in-page'>
                        <form onSubmit={handleClick} encType='application/json' className='admin-sign-in-page-form'>
                            <h1 className='admin-sign-in-page-form-header'>
                                Sign In
                            </h1>

                            <label className='admin-sign-in-page-form-label'>
                                <p className='admin-sign-in-page-form-title'>Email/Username <img src={Tooltip} alt="info" className='admin-sign-in-page-form-tooltip' /></p>
                                <input type="text" onChange={handleUsernameChange} placeholder='Enter your email/username' className='admin-sign-in-page-form-field' />
                                {error && username.length <= 0 ? <p className='login-form-error-message'>Enter your email/username</p> : ''}
                            </label>

                            <label className='admin-sign-in-page-form-label'>
                                <p className='admin-sign-in-page-form-title'>Password<img src={Tooltip} alt="info" className='admin-sign-in-page-form-tooltip' /></p>
                                <input type="password" placeholder='Enter your password' className='admin-sign-in-page-form-field' onChange={handlePasswordChange} />
                                {error && password.length <= 0 ? <p className='login-form-error-message'>Enter your password</p> : ''}
                            </label>
                            <div className='admin-sign-in-page-button-wrapper'><button disabled={loading} className="admin-sign-in-page-button">{loading ? <CircularProgress color="inherit" size="25px" /> : 'Login'}</button>
                            </div>
                            {invalidData ? <p className='login-form-error-message'>{errorMessage}<span>{`(${count})`}</span></p> : ''}
                        </form>
                    </div>
                    <div className='login-page-image-wrapper'>
                        <img src={HomePageImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login