'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function PostBlog() {

    const [input, setInput] = useState({ title: '', description: '' })
    const router = useRouter()
    function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = e.target
        setInput(prev=>({...prev, [name]:value}))
    }

   async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!input.title || !input.description) {
            return alert('please fill all fields')
        }
        try {
         const addPost =  await axios.post('/api/post', {title: input.title, description:input.description})
           
            if (addPost) {
                
                router.push('/')
                router.refresh()
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    
//    async function handleSubmit2(e:React.FormEvent) {
//         e.preventDefault()
//         if (!input.title || !input.description) {
//             return
//         }
//         try {
//             const post = await fetch('http://localhost:3000/api/post', {
//                 method: 'POST',
//                 headers: {'Content-Type':'application/json'},
//                  body: JSON.stringify({title: input.title, description:input.description})
             
//             })

//                router.refresh()
         
//         } catch (error) {
//             console.log(error);
            
//         }
//     }

    
  return (
      <div className='grid place-content-center min-h-[75vh]'> 
          <form className='flex w-[350px] lg:w-[500px] flex-col gap-4' action="" onSubmit={handleSubmit}>
              <input className='ring-1 w-full h-14 p-2' type="text" name='title' value={input.title} placeholder='blog topic...' onChange={handleChange} />
              <textarea className='ring-1 h-28 p-2' name='description' value={input.description} placeholder='blog content...' onChange={handleChange}/>
             <button className='w-full  bg-slate-600 text-white capitalize p-2 text-lg rounded-lg' type='submit'>submit post</button>
          </form>
       
    </div>
  )
}

export default PostBlog