import React from 'react'

const Loginform = ({ isOpen }) => {


  return (
    <div>
    {isOpen && 
    <form className='absolute z-10'>
        LoginForm
    </form>
     }
       </div>
  )
}

export default Loginform;