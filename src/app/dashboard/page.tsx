"use client"

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styles from "./dashboard.module.css"



const Dashboard = () => {
  const {data:session} = useSession()

  return (
   <div className={styles.body}>
    <h2  className={styles.h2}>Welcome to my Portfolio page </h2>
     <h1 className={styles.name}>{session?.user?.name}</h1>
     <button className={styles.seeport}><Link href={"/home"}>See my Portfolio</Link></button>
    
   </div>
  );
}

export default Dashboard
