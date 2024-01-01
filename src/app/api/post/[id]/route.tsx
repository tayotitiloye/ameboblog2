import { NextRequest, NextResponse } from "next/server"
import prisma from "@/app/lib/prismadb"



export async function GET(req:NextRequest,{params}:{params:{id:string}}) {
    
    const {id} = params
    try {
       const singlePost =  await prisma.post.findUnique({
            where: {id}
        })

        return new NextResponse(JSON.stringify(singlePost))
    } catch (error) {
        return new NextResponse(JSON.stringify('something went wrong'))
        
    }
}
export async function DELETE(req:NextRequest,{params}:{params:{id:string}}) {
    
    const {id} = params
    try {
         await prisma.post.delete({
            where: {id}
        })

        return new NextResponse(JSON.stringify('post deleted'))
    } catch (error) {
        return new NextResponse(JSON.stringify('something went wrong'))
        
    }
}

export async function PUT(req:NextRequest, {params}:{params:{id:string}}) {
    
    const {id} = params
    try {
        const body = await req.json()

        await prisma.post.update({
            where:{ id},
            data: body
        })

        return new NextResponse(JSON.stringify('post updates'),{status:200})
    } catch (error) {
        console.log(error);
        
        return new NextResponse(JSON.stringify('something ewnt wrong'),{status:500})
    }
}