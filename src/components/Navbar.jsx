import React, {useState} from 'react'
import logo from '../images/logo.svg'
import '../index.css'
import Button from './Button'
import menuicon from '../images/icon-hamburger.svg'
import closeicon from '../images/icon-close.svg'

const Navbar = ({ handleClickLogin }) => {

const links = [
    {name: 'Home', links: "/"},
    {name: 'About', links: "/"},
    {name: 'Contact', links: "/"},
    {name: 'Blog', links: "/"},
    {name: 'Careers', links: "/"}
]
 

const [open, setOpen] = useState(false);

  return (
    <div className = "font-['Public_Sans'] text-[18px] text-[#9698A6] relative z-10">
        <div className = "flex items-center justify-between bg-white py-6 px-16 ">
            <div>
                <img src = {logo} alt = "logo"/>
            </div>
            <ul className = "hidden md:flex items-center">
                {links.map((link) => {
                    return(
                     <li key = {link.name} className = "md: mx-3.5"><a href = {link.links} className = "">{link.name}</a></li>
                )})}   
                    
            </ul>

            <button onClick={handleClickLogin}
             className = "hidden md:flex justify-center w-40 bg-[#00ccab] text-[#ffffff] font-['Public_sans'] py-2 px-3 md:mr-5 rounded-full">
            Request Invite
            </button>
            
            {/* mobile menu */}
            <div onClick={(() =>setOpen (!open))} className = "md:hidden "> 
                {open ? <img src = {closeicon} alt = "navigation"/> : <img src = {menuicon} alt = "navigation"/>}
            </div>

        </div>
        <div className = "md:hidden relative ">
            {
                open &&  <ul className = "absolute z-10 grid justify-center text-slate-800 bg-white rounded w-full">
                {links.map((link) => {
                        return(
                            <li key = {link.name} className = "py-4"><a href = {link.links} className = " ">{link.name}</a></li>
                        )
                    }
                    )}
                </ul>
            }
               
            </div>

    </div>
  )
}

export default Navbar