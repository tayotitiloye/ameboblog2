import Link from 'next/link'
import React from 'react'

function Header() {
  return (
      <div>
           <div className='flex items-center h-20 font-bold px-6 justify-between bg-slate-800 text-slate-200'>
              
                  <Link href={'/'} className='text-xl'>
                        
                      <h1>Amebo Blog</h1>
                  </Link>
                 
                  <Link className='cursor-pointer bg-white p-3 rounded-lg capitalize text-slate-600' href={'/post'}>
                      add post
                  </Link> 
                 
              </div>
          
    </div>
  )
}

export default Header