import { NextRequest, NextResponse } from "next/server"
import prisma from "@/app/lib/prismadb";

export async function GET() {
   
    try {
        
        const blogPost = await prisma.post.findMany()
        return new NextResponse(JSON.stringify(blogPost),{status:200})
    } catch (error) {
       
       
        console.log(error); 
        return new NextResponse(JSON.stringify('something went wrong'),{status:500})
    }
}


export async function POST(req: NextRequest) {
   
    try {
        const body = await req.json()
        
        const blogPost = await prisma.post.create({
           data: body
        })
        return new NextResponse(JSON.stringify(blogPost),{status:200})
    } catch (error) {
       
       
        console.log(error); 
        return new NextResponse(JSON.stringify('something went wrong'),{status:500})
    }
}