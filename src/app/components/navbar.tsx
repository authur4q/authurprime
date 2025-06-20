"use client"

import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import styles from "./navbar.module.css"

const Navbar = () => {
  const {data:session} = useSession()
  return (
    <div  className={styles.navbar}>
      <div className={styles.logo}>
        <h3>Authur Prime</h3>
      </div>
      {session?.user?       <div className={styles.links}>
        <Link href={"/home"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/about"}>About Me</Link>
      

      {session?.user? (
        <button className={styles.btn} onClick={() => signOut({callbackUrl:"/"})}>Log Out</button>):null}
      
    </div>:null}
    </div>
  )
}

export default Navbar
