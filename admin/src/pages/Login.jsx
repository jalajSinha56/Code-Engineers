import React from 'react'
import { assets } from '../assets/assets'
import { useState as usestate } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { useContext } from 'react'

const Login = () => {

    const [state,setstate] = usestate('Admin')

    const [email,setemail] = usestate('')
    const [password,setpassword] = usestate('')

    const {setAToken} = useContext(AdminContext)

    const onSubmitHandler = async (event) => {

        event.preventDefault()
        try{
            if(state === 'Admin'){
                const {data} = await axios.post(backendUrl + 'api/admin/login',{email,password
                })
                if(data.success){
                localStorage.setItem('aToken',data.token)
                setAToken(data.token)
                }
                else{
                    toast.error(data.message)
                }
            }
            else{

            }

        } catch(error){

        }
    }

  return (
    <form className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'> 
            <p className='text-2xl font-semibold m-auto'><span className='text-pr'>{state}</span>Login</p>
            <div className='w-full'>
                <p>Email</p>
                <input onChange = {(e)=>setemail(e.target.value)} value={email} className = 'border border-[#DADADA] rounded w-full p-2 mt-1' type='email' required />
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input onChange = {(e)=>setpassword(e.target.value)} value={password} className = 'border border-[#DADADA] rounded w-full p-2 mt-1' type='password' required />
            </div>
            <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
            {
                state === 'Admin' ? <p className='text-sm text-center'>Doctor Login? <span onClick={() => setstate('Doctor')} className='text-pr underline cursor-pointer'>Click here</span></p> : <p className='text-sm text-center'>Admin login? <span onClick={() => setstate('Admin')} className='text-pr underline cursor-pointer'>Click here</span></p>
            }
        </div>

    </form>
  )
}

export default Login