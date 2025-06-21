"use client"

import { signIn } from 'next-auth/react'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Login = () => {
      
      const [email,setEmail] = useState("")
      const [password,setPassword] = useState("")
      const [error,setError] = useState("")
       const router = useRouter()

      const handleSubmit = async (e:any) =>{
        e.preventDefault()
        try {
         const res = await signIn("credentials",{
            email,
            password,
            redirect:false,
          })

          if (res?.error){
            setError("invalid Credentials")
            router.push("/")
          }else{
            router.push("/dashboard")
          }

          
        } catch (error) {
          console.log(error)
        }
      }
        return (
              <div className="login">
                <h1>Login here</h1>
                  <div className="form">
                   <form onSubmit={handleSubmit}>
                  <input onChange={ e => setEmail(e.target.value) } type="text" placeholder='email' />
                  <input onChange={ e => setPassword(e.target.value) } type="password" placeholder='password'/>
                   {error && <h3 className="error">{error}</h3>}
                  <button className="btn">Login</button>
                  <br />
                  <h2>Or</h2>
                   <p>Don't have an account? <a href="/register">Register</a></p>
                </form>
                  </div>
               
              </div>

  )

  
}

export default Login
