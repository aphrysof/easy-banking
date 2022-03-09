import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import Button from './Button'
const Footer = () => {
  return (
    <>
    <div className = "hidden md:flex bg-[#2D314D] flex flex-row py-20 gap-20">
    <div className = "grid gap-10 px-20">
    <img src={logo} alt = "logo" className = "fill-white"/>
    <div className = "flex md:flex flex-row gap-3 pt-5">
    <img src = {facebook} alt = ""/>
    <img src = {instagram} alt = ""/>
    <img src = {pinterest} alt = ""/>
    <img src = {twitter} alt = ""/>
    <img src = {youtube} alt = ""/>
    </div>
  
    </div>
    <div className = "text-white">
        <ul>
            <li className= "pb-3"><a href = "#about us">About us</a></li>
            <li className= "pb-3"><a href = "#contact">Contact</a></li>
            <li className= "pb-3"><a href = "#blog">Blog</a></li>
        </ul>
    </div>
    <div className = "md:pl-10 text-white">
        <ul>
            <li className= "pb-3"><a href = "#careers">Careers</a></li>
            <li className= "pb-3"><a href = "#support">Support</a></li>
            <li className= "pb-3"><a href = "#privacy-policy">Privacy Policy</a></li>
        </ul>
    </div>
    <div>
      <Button>Request Invite</Button>
      <p className='text-white'>&copy;Easybank.All Rights Reserved.</p>
    </div>
    </div>


   {/* Mobile view*/}
   <div className='md:hidden'>
      <div className='bg-[#2D314D] flex flex-col items-center justify-center gap-5 py-10'>
        <img src={logo} alt = "logo" className = "text-white"/>
          <div className = "flex flex-row gap-5">
          <img src = {facebook} alt = ""/>
          <img src = {instagram} alt = ""/>
          <img src = {pinterest} alt = ""/>
          <img src = {twitter} alt = ""/>
          <img src = {youtube} alt = ""/>
        </div>
        <div className = "text-white  hover:bg-[#00ccab]">
        <ul className='flex flex-col items-center'>
            <li className= "pb-3 "><a href = "#about us">About us</a></li>
            <li className= "pb-3"><a href = "#contact">Contact</a></li>
            <li className= "pb-3"><a href = "#blog">Blog</a></li>
            <li className= "pb-3"><a href = "#careers">Careers</a></li>
            <li className= "pb-3"><a href = "#support">Support</a></li>
            <li className= ""><a href = "#privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
      <div  className='flex flex-col items-center'>
      <Button>Request Invite</Button>
           <p className='text-white pt-3'>&copy;Easybank.All Rights Reserved.</p>
      </div>
   </div>
   </div>
</>
  )
}

export default Footer