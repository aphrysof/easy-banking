import React from 'react'
import background from '../images/bg-intro-desktop.svg'
import mockups from '../images/image-mockups.png'
import mobilebg from '../images/bg-intro-mobile.svg'
import Button from './Button'

const Hero = () => {

const styles = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    width: '100vw'

}
const mobilestyles = {
    backgroundImage: `url(${mobilebg})`,
    height: '100vh'
}
  return (
    <>
         <div className = "hidden md:flex flex-row relative overflow-hidden h-full">
             <div className = "pl-16 my-20">
                <h1 className = "md:text-5xl leading-normal text-slate-700	">
                    Next generation<br/>
                    digital banking
                </h1>
                <p className = "md:leading-relaxed text-left tracking-normal py-8 text-[#9698A6]">Take your financial life online. Your Easybank account<br/>  
                    will be a one-stop-shop for spending, saving, 
                    budgeting investing and much more
                </p>
                <Button>
                    Request Invite
                </Button>
                </div>
                    <div className = "md:bg-cover bg-no-repeat bg-left-bottom relative left-40 bottom-20" style={styles}>
                       <img src={mockups} alt = "mockup" width = "580px" className = "relative bottom-5 left-60 " /> 
                    </div>
             </div>
             {/*mobile view */}
             <div className = "md:hidden relative ">
                <div className = "bg-no-repeat bg-cover bg-[center_bottom_10rem]" style = {mobilestyles}> 
                    <img src = {mockups} alt = "mobile-mockups" className='relative bottom-[11rem]'/>
                    </div>
                <div className = "relative  ">
                <h1 className = "text-5xl leading-normal text-slate-700 text-center">
                    Next generation<br/>
                    digital banking
                </h1> 
                <p className = "leading-relaxed text-left tracking-normal py-8 text-[#9698A6] text-justify p-10">Take your financial life online. Your Easybank account  
                    will be a one-stop-shop for spending, saving, 
                    budgeting, investing and much more
                </p>
              <Button>
                  Request Invite
              </Button>

                </div>

             </div>
             
    
    </>
   
  )
}

export default Hero