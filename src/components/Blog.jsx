import React from 'react'
import {blog} from './BlogData'

const Blog = () => {
  return (

    <div className = "p-5 md:p-20 bg-[#F9FAFB]">
        <h1 className = "text-4xl text-slate-700 pb-10 text-center md:text-4xl text-slate-700 pb-10">Latest Articles</h1>
        <div className = "grid md:flex flex-row gap-5 ">
        {blog.map((blog) => {
            return(
                <div key = {blog.id} className = "grid md:flex flex-col bg-white rounded-lg overflow-hidden">
                    <img src={blog.images} alt = 'blog-image' className = "h-full"/>
                    <div className = "p-4 py-5">   
                    <p className = "font-light text-[#9698A6] text-xs">{blog.author}</p>
                    <h1 className = "text-lg py-3 font-normal text-slate-700">{blog.title}</h1>
                    <p className = "font-light text-[#9698A6]">{blog.content}</p>
                    </div>
                   
                </div>
            )
        })}
        </div>
       
    </div>
  )
}

export default Blog