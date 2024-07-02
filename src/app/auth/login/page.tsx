'use client'

import React, { useState } from 'react'

import axios from 'axios';

const LoginPage = () => {
  //const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/tsk_mgt/api/v1/auth/login', {email: email, password: password})
      if(res.status === 200) {
        console.log('Response ==================================>', res.data);
      }
    } catch(error) {
      console.log('Error==================================>', error);
    }
  }

  return (
    <>
      <input placeholder='email' value={email} onChangeCapture={(text) => setEmail(text.currentTarget.value)} name='email' />
      <input placeholder='password' value={password} onChangeCapture={(text) => setPassword(text.currentTarget.value)} name='password' />
      <button onClick={handleLogin} className='bg-[#008000'>Login</button>
    </>
  )
}

export default LoginPage