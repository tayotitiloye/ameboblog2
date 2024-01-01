import Link from 'next/link'
import React from 'react'
import DeleteBtn from './DeleteBtn'
import { FaEdit } from "react-icons/fa";

async function getData() {
   
     
     const res = await fetch("http://localhost:3000/api/post", {
     //const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post`, {
         cache:'no-store'
     })
     if (!res.ok) {
         throw new Error("unable to fetch data")
        }
        return res.json()
}
 
interface Props{
    id: string;
    title: string;
    description: string;
}


export const revalidate = 0;


async function MainPage() {

    const data:Props[] = await getData()
    return (
        <div className='min-h-[73vh] mx-16'>
            
            
              {data.length > 0 ? ( <div className='mb-10'>
           
                    {data.map(p =>
          
                    (<div key={p.id} className='m-3 shadow-md hover:shadow-lg '>
          
                        <div className='flex items-center bg-white m-2 rounded-lg p-2 justify-between'>
                            <div >
                  
                                <p className='text-xl font-bold capitalize border-b-2'>Topic: {p.title}</p>
                                <p className='my-4'>{p.description}</p>
                            </div>
                            <div className='flex gap-2'>
                                <DeleteBtn id={p.id} />
                                <Link href={`/post/${p.id}`}>
                                    <button>
                                        <FaEdit /></button>
                                </Link>
                            </div>
                        </div>

                    </div>))}
            </div> ):(    <div className='capitalize h-[calc(100vh-148px)] grid place-content-center text-3xl font-medium'>
                    no post to display at the moment, please add new Post
                    <Link href={'/post'} className='text-red-500 italic font-bold underline w-fit'>
                        Here
                    </Link>
                    
                    </div>)}

      </div>
  )
}

export default MainPage