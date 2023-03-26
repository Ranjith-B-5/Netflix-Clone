import React, { useState } from 'react'
import image from '../assets/img1.jpg'
import { Link } from 'react-router-dom'
// import {UserAuth} from '../context/AuthContext'

const SignUp = () => {

    const[email,setEmail] = useState('')
    const[passowrd, setPassword] = useState('')
    // const [user,signUp ] =  UserAuth()

    const handleSubmit = async (e) =>
    {
        alert("currently not working ;-) Go to home page by clicking on NETFLIX")
        // e.preventDefault()
        // try{
        //     await signUp(email, password)
        // }
        // catch(err)
        // {
        //     console.log(err)
        // }
    }
  return (
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src={image}></img>
        <div className='w-full h-full absolute left-0 top-0 bg-black/60'></div>
        <div className='fixed px-4 py-24 w-full'>
            <div className="max-w-[450px] h-[550px] mx-auto bg-black/75 text-white">
                <div className='max-w-[320px] mx-auto pt-16 ml-16'>
                <h1 className='text-3xl font-semibold'>SignUp</h1>
                </div>
                <form onSubmit = {handleSubmit}>
                    <div className='flex flex-col px-16 pt-4'>
                    <input onChange={(e) => setEmail(e.target.value)} className ="my-4 h-10 border-gray-300 rounded-sm bg-gray-700 pl-2" type="email" placeholder='Email' auotComplete='email'></input>
                    <input onChange={(e) => setPassword(e.target.value)}className ="my-4 h-10 rounded-sm bg-gray-700 pl-2" type="password" placeholder="Password"></input>
                    <button type='submit' className='bg-red-600 my-4 h-10 text-white '>SignUp</button>
                    </div>
                    <div className='flex justify-between items-center text-sm text-gray-600 mx-16 mt-2'>
                        <p><input className='mr-2' type="checkbox"></input>Remember me</p>
                        <p>Need help?</p>

                    </div>
                    <p className='pl-16 py-6 '><span className='text-gray-600'>Already subscribed to Netflix? </span>
                    <Link to='/login'>Sign in</Link></p>
                </form>

            </div>
        </div>
    </div>
  )
}

export default SignUp
