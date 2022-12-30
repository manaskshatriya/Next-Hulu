import { useRouter } from 'next/router'
import React from 'react'
import requests from '../utils/requests'

export default function Navbar() {
    const router = useRouter();
  return (
    <nav className='relative' >
      <div className='flex px-10 sm:p-20 text-2xl whitespace-nowrap 
      space-x-10 sm:space-x-20  overflow-x-scroll scrollbar-hide ' >
        {Object.entries(requests).map( ([key,{title , url}])=>(
            <h2 
            onClick={()=>router.push(`/?genre=${key}`)}
            className=' last:pr-24 cursor-pointer hover:text-white active:text-red-500
            transition duration-100 
            transform hover:scale-125 
            ' key={key}>{title}</h2>
        )  )}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l h-10 w-1/12 from-[#06202A] " div/>
    </nav>
  )
}
