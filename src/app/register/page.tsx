

"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from "./register.module.css"
import Link from 'next/link'

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        if(!name || !email || !password){
            setError("all fiels are required")
            return;
        }

        try {
               const resUserExists = await fetch("api/userExists",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email}),
            })
          
            const {user} = await resUserExists.json()
            

            if(user){
                console.log(user)
                setError("user already exists")
                return;
            }

            const res = await fetch("api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email,password})
             })
        
            
            if(res.ok){
                router.push("/")
            }else{
                alert("registration failed")
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={styles.reg}>
      <h1>Register here</h1>
        <div className={styles.form}>
         <form onSubmit={handleSubmit}>
        <input value={name} onChange={ e => setName(e.target.value) } type="text" placeholder='username'/>
        <input onChange={ e => setEmail(e.target.value) } type="text" placeholder='email' />
        <input onChange={ e => setPassword(e.target.value) } type="password" placeholder='password'/>
         {error && <h3 className={styles.error}>{error}</h3>}
        <button className={styles.btn}>Register</button>
        <br />
        <h2>Or</h2>
         <p>Already have an account? <Link href="/">Login</Link></p>
      </form>
        </div>
     
    </div>
  )
}

export default Register
