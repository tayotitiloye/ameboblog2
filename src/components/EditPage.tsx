'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


interface Props{
    id: string;
    title: string;
    description: string;
}
interface Props2{
 data: Props
}

function EditPage({data}:Props2) {

    const [editedinput, setEditedInput] = useState({ title: data.title, description: data.description })
    const router = useRouter()
    function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = e.target
        setEditedInput(prev=>({...prev, [name]:value}))
    }


    // async function handleSubmit(e:React.FormEvent) {
    //    e.preventDefault()
    //     try {
    //          axios.put(`/api/plan/${post.id}`, editActivity )

    //         router.refresh()

    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }

   async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!editedinput.title || !editedinput.description) {
            return alert('please fill all fields')
        }
        try {
         const addPost =  await axios.put(`/api/post/${data.id}`, {title: editedinput.title, description:editedinput.description})
           
            if (addPost) {
                
                router.push('/')
                router.refresh()
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    

    
  return (
      <div className='grid place-content-center min-h-[75vh]'>
          <form className='flex w-[350px] lg:[500px] flex-col gap-4' action="" onSubmit={handleSubmit}>
              <input className='ring-1 w-full h-14 p-2' type="text" name='title' value={editedinput.title} placeholder='blog topic...' onChange={handleChange} />
              <textarea className='ring-1  h-28 p-2' name='description' value={editedinput.description} placeholder='blog content...' onChange={handleChange}/>
             <button className='p-2 rounded-lg bg-green-500 font-medium text-lg ' type='submit'>Update Post</button>
          </form>
    </div>
  )
}

export default EditPage