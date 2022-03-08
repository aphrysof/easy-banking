import React from 'react'
import { data } from './Data'

const About = () => {
  return (
    <div className = "bg-[#F3F4F6] relative bottom-[4rem] p-10 md:p-20">
        <div className = "md:py-5 flex flex-col justify-center ">
           <p className='text-center md:px-4 text-4xl text-slate-700'>Why choose Easybank?</p>
           <p className = "text-center md:px-4 py-6 text-[#9698A6] font-light">We leverage Open Banking to turn your bank account into your financial hub.<br/> Control your finances like never before</p>
        </div>
        <div className = 'grid md:flex flex-row'>
        {data.map((data) => {
            return(<div key = {data.id} className ="flex flex-col items-center justify-center md:px-4 flex ">
                <img src = {data.image} alt = "icon"/>
                <h1 className = "text-xl py-5 font-normal text-slate-700">{data.title}</h1>
                <p className = "font-light text-[#9698A6]">{data.content}</p>
            </div>)
        })}
        </div>
    </div>
  )
}

export default About