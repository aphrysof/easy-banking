import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGoogle, FaRegEnvelope, FaLock } from 'react-icons/fa'


const Loginform = ({ isOpen }) => {


  return (
    <>
    {isOpen && 
    <form className='absolute z-10 bg-white py-10'>
           <div className='grid w-96 h-96 m-5'>
               <h1 className='text-xl text-center font-bold '>LOGIN</h1>
               <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                <FaRegEnvelope className = "w-5 h-5 absolute ml-3 pointer-events-none"/>
               <input
                type = "Email"
                 placeholder='Email' 
                 name = "Email" 
                 autoComplete='off'
                 aria-label='Email'
                 className='pr-3 pl-10 py-2 bg-slate-200 w-96 rounded-md'

                 />
               </div>
               <div className='relative flex items-center text-gray-400'>
                <FaLock className='w-5 h-5 absolute ml-3 pointer-events-none' />
               <input 
               type = "password"
               placeholder='Password'
               name='password'
               className='pr-3 pl-10 py-2 bg-slate-200 w-96 rounded-md'
               />
               </div>
              
               <div className='flex items-center gap-2 pb-5'>
               <input type= "checkbox" /><label>Remember me</label>
               </div>
               <div className='flex flex-col'>
               <button className='bg-[#00ccab] py-2 rounded-md'>LOGIN</button>
               <span className='text-center pt-10'>Or login with</span>
               </div>
              
               <div className='flex flex-row gap-5 justify-between'>
                   <button className='flex justify-center items-center gap-1 border w-44 text-[#29487D] outline-inherit'><FaFacebookSquare />Facebook</button>
                   <button className='flex justify-center items-center gap-1 border w-44 text-[#DB4437] outline-inherit'><FaGoogle/>Google</button>
               </div>
           </div>
    </form>

     }
       </>
  )
}

export default Loginform;