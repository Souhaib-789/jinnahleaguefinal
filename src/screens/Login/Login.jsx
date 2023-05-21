


import React, { useState, useEffect } from 'react'
import userImage from '../../assets/user.webp'
import { FaLock, FaEnvelope } from "react-icons/fa";
import { OutlinedPasswordTextField, OutlinedTextField } from '../../components/input/OutlinedTextField';
import { Link, useNavigate } from 'react-router-dom';
import AppButton from '../../components/button/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/AuthSlice';
import { CircularProgress } from '@mui/material';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const disptach = useDispatch()

    useEffect(() => {
        if (token) {
            navigate('/home')
        }
    }, [])


    const loginForm = [
        {
            label: "Email",
            InputIcon: FaEnvelope,
            width: '100%',
            handleInput: (e) => {
                setEmail(e.target.value)
            }
        },
    ]

    const { status } = useSelector((state) => {
        return state.signupAuth
    })

    const login = async (e) => {
        e.preventDefault()

        const user = {
            email,
            password
        }
        try {
            await disptach(loginUser(user)).unwrap()
            navigate('/home')
        }
        catch (err) {
            // console.log('err', err);
        }

        // axios.post('http://localhost:5000/api/login', {
        //     email,
        //     password
        // })
        //     .then(res => {
        //         localStorage.setItem('token', res.data.token)
        //         navigate('/home')
        //         toast.success(res.data.message)
        //     })
        //     .catch(err => {
        //         toast.error(err.response.data.message)
        //     })
    }

    return (<div>
        <h1 className='main-heading'>My Expense Tracker</h1>
        <div className='form-container'>

            
            <img src={userImage} alt="user" />
            <form>
                <h2>Login</h2>

                {
                    loginForm.map((data, i) => {
                        return <OutlinedTextField
                            key={i}
                            style={{ width: data.width }}
                            label={data.label}
                            InputIcon={data.InputIcon}
                            onChangeFunc={data.handleInput}
                        />
                    })
                }
                <OutlinedPasswordTextField
                    style={{ width: '100%' }}
                    label={'Password'}
                    InputIcon={FaLock}
                    onChangeFunc={(e) => setPassword(e.target.value)}
                />

                <div className='btn-container'>
                    <AppButton text={status === 'loading' ? <CircularProgress color='inherit' size="15px" /> : 'Login'}
                        disabled={status === 'loading' ? true : false}
                        onClickFunc={login}
                        style={{ width: '80px' }}
                    />
                    <Link to="/signup">Sign up</Link>
                </div>
            </form>
        </div >
        </div>



    )
}

export default Login

