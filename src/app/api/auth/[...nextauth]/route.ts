import  NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { connectMongoDb } from "../../../../../lib/mongoDB";
import User from "../../../../../models/users";
import bcrypt from "bcryptjs";



const options:NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials:{},

        async authorize(credentials){
            const {email,password} = credentials

            try {
                await connectMongoDb()
                const user = await User.findOne({email})
                if(!user){
                    return null
                }

               const passwordsMatch = await bcrypt.compare(password,user.password)
               if(!passwordsMatch){
                return null
            }
            return user
            } catch (error) {
                console.log(error)
            }
            
        },
     })
    ],

    session:{
        strategy:"jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/",
    },
    
};


const handler = NextAuth(options)
export {handler as GET,handler as POST }
