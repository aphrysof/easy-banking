import React, {useRef} from 'react'
import ReactDom from "react-dom"
import { FaGoogle, FaRegEnvelope, FaLock } from 'react-icons/fa'


const Loginform = ({ setShowModal, SignInWithGoogle }) => {

const modalRef = useRef();
const closeModal = (e) => {
  if(e.target === modalRef.current) {
    setShowModal(false)
  }
}
  return ReactDom.createPortal (
    <div ref = {modalRef} onClick = {closeModal} className = "fixed top-0 left-0 bottom-0 right-0 h-screen flex items-center justify-center bg-[#000000b3] z-10">
    <div className = 'rounded-md relative grid bg-white flex items-center justify-center'>
         <form className=' w-96 m-5'>
               <h1 className='text-xl text-center font-bold pb-5'>LOGIN</h1>
               <div className='flex flex-col gap-5 pb-5'>
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
               </div>
               <div className='flex items-center gap-2 pb-5'>
               <input type= "checkbox" /><label>Remember me</label>
               </div>
               <div className='flex flex-col'>
               <button className='bg-[#00ccab] py-2 rounded-md'>LOGIN</button>
               <span className='text-center pt-10'>Or login with</span>
               </div>
          
    </form>
    <div className='flex flex-row gap-5 justify-between m-5'>
                  <button className='flex rounded-md md:flex justify-center items-center gap-1 border w-96 py-2 text-[#DB4437] outline-inherit hover:bg-[#DB4437] hover:text-white rounded-md'
                   onClick={SignInWithGoogle}><FaGoogle/>Google</button>
               </div>
    </div>
    </div>, document.getElementById("portal")
  )
}

export default Loginform;