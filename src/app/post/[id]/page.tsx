import EditPage from '@/components/EditPage'
import React from 'react'

async function getData(id:string) {
     const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    // const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post/${id}`, {

        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('unable to fetch data')
    }
    return res.json()
}

interface Props{
    id: string;
    title: string;
    description: string;
}

export const revalidate = 0;

async function page({params}:{params:{id:string}}) {

    const { id} = params
    
    const data:Props = await getData(params.id)

  return (
      <div>
          <EditPage data={data} />
          
    </div>
  )
}

export default page