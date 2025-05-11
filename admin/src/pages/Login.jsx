import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { useContext } from 'react'
import { toast } from 'react-toastify'

const Login = () => {

    const [state, setState] = useState('Admin')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAToken, backendUrl } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {

        event.preventDefault()
        try {
            if (state === 'Admin') {
                const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password })
                console.log(data.token);

                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                }
                else {
                    toast.error(data.message || 'Login failed')
                }
            }
            else {

            }

        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something went wrong. Please try again.');
            }
            console.error("Login error:", error);
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'><span className='text-pr'>{state}</span>Login</p>
                <div className='w-full'>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type='email' required />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type='password' required />
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
                {
                    state === 'Admin'
                        ? <p className='text-sm text-center'>Doctor Login? <span onClick={() => setState('Doctor')} className='text-pr underline cursor-pointer'>Click here</span></p>
                        : <p className='text-sm text-center'>Admin login? <span onClick={() => setState('Admin')} className='text-pr underline cursor-pointer'>Click here</span></p>
                }
            </div>

        </form>
    )
}

export default Login