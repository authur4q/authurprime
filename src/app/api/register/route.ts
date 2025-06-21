import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../lib/mongoDB";
import User from "../../../../models/users";
import bcrypt from "bcryptjs"


export const POST = async (req:Request) => {
    try {
          const {name,email,password} = await req.json()
        
          const hashedPassword = await bcrypt.hash(password,10)
        await connectMongoDb()
        await User.create({name,email,password:hashedPassword})
    console.log(name)
    console.log(email)
    console.log(password)

    return NextResponse.json({message:"user created successfully"},{status:201})

} catch {
    return NextResponse.json({message:"user registration failed"},{status:500}) 
    }
}