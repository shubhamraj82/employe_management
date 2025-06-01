import React, { useState } from 'react'

const Login = () => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log(" your entered email is",email)
    console.log("your entered password is ",password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-2xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required className='text-white outline-none bg-transparent border-2  border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white' type='email' placeholder='Enter your email.....'></input>
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-3' type='password' placeholder='Enter your password......'></input>
          <button className='text-white outline-none bg-emerald-600 border-none text-xl py-3 px-5 rounded-full mt-5 placeholder:text-white'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login