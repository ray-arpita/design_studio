import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-center  bg-slate-900'>
    <div className="flex justify-around px-8 my-3 bg-slate-300 shadow-md shadow-slate-500/60 hover:shadow-slate-700 text-slate-500  p-2 w-1/3 rounded-full ">
  <Link to='/'> 
    <div className="text-gray blur-none hover:text-slate-900   transition-all duration-300">HOME</div>
  </Link>
   <Link to='/work'>
    <div className="text-gray blur-none hover:text-slate-900">WORK</div>
   </Link>
   <Link to='/about'>
    <div className="text-gray blur-none hover:text-slate-900  ">ABOUT</div>
   </Link>
  </div>
    </div>
  
  )
}

export default Navbar
