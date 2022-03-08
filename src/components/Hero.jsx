import React from 'react'
import background from '../images/bg-intro-desktop.svg'
import mockups from '../images/image-mockups.png'
import mobilebg from '../images/bg-intro-mobile.svg'
import Button from './Button'

const Hero = ({openModal}) => {

const styles = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    width: '100vw'

}
const mobilestyles = {
    backgroundImage: `url(${mobilebg})`,
    position: "relative",
    bottom: '20px'
}
  return (
    <>
         <div className = "hidden md:flex flex-row justify-center items-center relative overflow-hidden h-full">
             <div className = "pl-16 top-6">
                <h1 className = "text-5xl leading-normal text-slate-700	">
                    Next generation<br/>
                    digital banking
                </h1>
                <p className = "leading-relaxed text-left tracking-normal py-8 text-[#9698A6]">Take your financial life online. Your Easybank account<br/>  
                    will be a one-stop-shop for spending, saving, 
                    budgeting investing and much more
                </p>
                <Button>
                    Request Invite
                </Button>
                </div>
                    <div className = "bg-cover bg-no-repeat bg-left-bottom relative left-40 bottom-20" style={styles}>
                       <img src={mockups} alt = "mockup" width = "580px" className = "relative bottom-5 left-60 " /> 
                    </div>
             </div>
             {/*mobile view */}
             <div className = "md:hidden ">
                <div className = "relative bg-no-repeat bg-cover bg-[center_bottom_10rem]" style = {mobilestyles}> 
                    <img src = {mockups} alt = "mobile-mockups" className='relative bottom-[9rem]'/>
                    </div>
                <div className = "relative bottom-[9rem] ">
                <h1 className = "text-5xl leading-normal text-slate-700 text-center">
                    Next generation<br/>
                    digital banking
                </h1> 
                <div className='flex flex-col justify-center items-center'>
                <p className = "leading-relaxed text-left tracking-normal py-8 text-[#9698A6] text-justify p-10">Take your financial life online. Your Easybank account  
                    will be a one-stop-shop for spending, saving, 
                    budgeting, investing and much more
                </p>
              <button onClick={openModal} 
               className = "flex justify-center w-40 bg-[#00ccab] text-[#ffffff] font-['Public_sans'] py-2 px-3 md:mr-5 rounded-full">Request Invite</button>
              </div>
                </div>

             </div>
             
    
    </>
   
  )
}

export default Hero