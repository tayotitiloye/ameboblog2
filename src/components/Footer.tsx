import Link from 'next/link'
import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
      <div className='flex justify-around bg-slate-800/80 p-5 text-white'>
          
                <Link href={'/'} className='text-xl font-bold'>
                        
                      <h1>Amebo Blog</h1>
          </Link>
          
            <div className='flex items-center justify-center gap-2 '>
              <FaRegCopyright />
              <p>
                2024  all rights reserved
              </p>
            </div>
         </div>
  )
}

export default Footer