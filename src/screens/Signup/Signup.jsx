


import React, { useState, useEffect } from 'react'
import userImage from '../../assets/user.webp'
import { FaLock, FaEnvelope, FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { OutlinedPasswordTextField, OutlinedTextField } from '../../components/input/OutlinedTextField';
import { Link, useNavigate } from 'react-router-dom';
import AppButton from '../../components/button/AppButton';
import { CircularProgress } from '@mui/material';
import { signupUser } from '../../store/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';


const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')


  const navigate = useNavigate();
  const disptach = useDispatch()

  const signupForm = [
    {
      label: "Name",
      InputIcon: FaUserAlt,
      width: '100%',
      handleInput: (e) => {
        setName(e.target.value)
      }
    },
    {
      label: "Email",
      InputIcon: FaEnvelope,
      width: '100%',
      handleInput: (e) => {
        setEmail(e.target.value)
      }
    },
    {
      label: "Phone",
      InputIcon: FaPhoneAlt,
      width: '100%',
      handleInput: (e) => {
        setPhone(e.target.value)
      }
    },
  ]

  const { status } = useSelector((state) => {
    return state.signupAuth
  })

  const signup = async (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      phone,
      password
    }

    try {
      await disptach(signupUser(user)).unwrap()
      navigate('/')
    }
    catch (err) {
      // console.log('err', err);
    }
  }

  return (
    <div className='form-container'>

      <img src={userImage} alt='user' />

      <form>
        <h2>Sign up</h2>
        {
          signupForm.map((data, i) => {
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
          <AppButton text={status === 'loading' ? <CircularProgress color='inherit' size="15px" /> : 'Sign up'}
            disabled={status === 'loading' ? true : false}
            onClickFunc={signup}
            style={{ width: '100px' }}
          />

          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup

