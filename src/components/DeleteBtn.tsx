'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";


interface Id{
    id: string
}

function DeleteBtn({id}: Id) {

    const router = useRouter()
// function handleDelete(id:string) {
//     try {
//         axios.delete(`/api/post/${id}`)
//         router.refresh()
//     } catch (error) {
//         console.log(error);
        
//     }
//     }
//    async function deleteB(id:string) {
//        const del = await fetch(`/api/post/${id}`, {
//            method: "DELETE"
//        })
//                   router.refresh()
       
//    }

    async function handleDelete2(id: string) {
        
        const confirmation = confirm('Are you sure you want to delete this post?')
        if (confirmation) {
            
    
             const res = await fetch(`/api/post/${id}`, {
            method: 'DELETE'
            })
        }
        
            router.refresh()
  
    }
    

  return (
      <div>
          <button onClick={() => handleDelete2(id)} className=''>
             
              <FaTrashCan />

              </button>
        
    </div>
  )
}

export default DeleteBtn