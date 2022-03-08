import React from 'react'

export default function Button (props) {
  return (
    <button className = "flex justify-center w-40 bg-[#00ccab] text-[#ffffff] font-['Public_sans'] py-2 px-3 md:mr-5 rounded-full">
        {props.children}
    </button>
  )
}
