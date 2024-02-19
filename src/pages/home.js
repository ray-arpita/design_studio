import React from 'react'


const Home = () => {
  return (
    <>
    <h1 className='text-slate-600  hover:text-slate-400 text-5xl tracking-wider text-wrap px-8 sub-header'>CREATE YOUR<br/> IMAGINATION INTERIOR</h1>
    <div className='home_page_main_container flex justify-center items-center relative h-80 '>

      <div className="">
 <h1 className="text-9xl font-bold text-center tracking-widest text-center ">
     <span className='text-white'>
      DE
      </span> 
     <span className='text-stroke text-slate-900'>
      SIG
      </span> 
      <span className='text-white'>
      N
      </span>
    </h1>
    </div>
      </div>
      <div className='flex justify-between'>
        <button className="bg-slate-800 shadow-md shadow-slate-500/90 mx-6 hover:shadow-slate-300 text-slate-500  hover:text-slate-100 p-4 rounded-full">
          BOOK FREE CONSULTATION
        </button>
        <div className='text-slate-500 text-3xl mx-10'>
        Experience exquisite interiors tailored to<br/> your budget
        </div>
      </div>
    </>
  )
}

export default Home
