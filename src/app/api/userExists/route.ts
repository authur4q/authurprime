

import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../lib/mongoDB";
import User from "../../../../models/users";

export const POST = async (req: Request) => {
    try {
        await connectMongoDb()
        const { email } = await req.json();

        const user = await User.findOne({ email })
        console.log(user)

        
            return NextResponse.json({user});
       
    } catch (error) {
        console.error(error); 
        return NextResponse.json({ message: "An error occurred." }, { status: 500 });
    }
};