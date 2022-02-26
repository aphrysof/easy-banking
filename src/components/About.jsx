import React from 'react'
import { data } from './Data'

const About = () => {
  return (
    <div className = "bg-[#F3F4F6] p-20 ">
        <div className = "py-5">
           <p className='px-4 text-4xl text-slate-700'>Why choose Easybank?</p>
           <p className = "px-4 py-6 text-[#9698A6] font-light">We leverage Open Banking to turn your bank account into your financial hub.<br/> Control your finances like never before</p>
        </div>
        <div className = 'grid md:flex flex-row '>
        {data.map((data) => {
            return(<div key = {data.id} className ="px-4 ">
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