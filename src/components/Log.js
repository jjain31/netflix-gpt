import React, { useState } from 'react'
import Header from './Header'
import bg from '../images/asset 0.jpeg'
const Log = () => {
  const [isSignIn,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignIn);
  }
  return (
    <div>
          <Header/>
          <div className='absolute ' >
                    <img className='h-screen w-screen' src={bg} alt='background'/>
          </div>
          <from className=' xs:w-6/12 md:w-4/12 lg:w-3/12  md:h-[500px] 2xl:h-[600px] bg-black bg-opacity-80 absolute z-10 mx-auto p-12  my-40 right-0 left-0 text-white flex justify-center  flex-col '>
                    <h1 className='m-2 sm:text-xl xs:text-md  md:font-bold md:text-3xl  '>{isSignIn? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn &&  <input type='text' placeholder='Full Name' className='p-2 mt-8  w-full bg-gray-700 bg-opacity-70 ring-1 ring-white ' required/>}
                    <input type='email' placeholder='Email Address' className='p-2 my-4 mt-8 w-full bg-gray-700 bg-opacity-70 ring-1 ring-white ' required/>
                    <input type='password' placeholder='Password' className='p-2 my-3 w-full bg-gray-700 bg-opacity-70 ring-1 ring-white ' required/>
                    <button className='mt-2 rounded-lg bg-red-700  h-10 text-center py-auto w-full'>{isSignIn? "Sign In" : "Sign Up"}</button>
                    <p className='py-4 cursor-pointer ' onClick={toggleSignInForm}>{isSignIn?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
          </from>
    </div>
  )
}

export default Log