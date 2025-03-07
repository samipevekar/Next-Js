"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from 'next/cache'

export const saveSnippet = async (id:number,code:string) => {
    const snippet = await prisma.snippet.update({
        where:{
            id
        },
        data:{
            code
        }
    })

    console.log(snippet)

    revalidatePath(`/snippet/${id}`)

    redirect(`/snippet/${id}`)


}

export const deleteSnippet = async (id:number)=>{
    await prisma.snippet.delete({
        where:{id}
    })
    revalidatePath('/')
    redirect("/")
}

export const createSnippet = async(prevState:{message:string},formData:FormData)=>{
    try {
        const title = formData.get('title');
        const code = formData.get('code');
    
        if(typeof title !== "string" || title.length<4){
            return {message:"Title is required and must be longer"}
        }
        if(typeof code !== "string" || title.length<8){
            return {message:"Code is required and must be longer"}
        }
    
        await prisma.snippet.create({
            data:{
                title,
                code
            }
        })

        // throw new Error("Oops something went wrong")

        revalidatePath('/')
        
    } catch (error:unknown) {
        if(error instanceof Error){
            return {message:error.message}
        }else{
            return {message:"some internal server error"}
        }
    }

    redirect('/');
}