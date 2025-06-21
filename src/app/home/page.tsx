/* eslint-disable react/no-unescaped-entities */

"use client"
import Link from "next/link";


import Image from "next/image";



export default function Home() {
return(
 <div>
  
  <div className="home">
   
    <div className="myPhoto">
    <div className="my">

      <h2>Hello,it's Me</h2>
      <h1>
        Authur Prime
      </h1>
      <h3>I'm a <span>Full-Stack Developer </span></h3>
      
    </div>
    <div>
      
      <p>
       I specialize in solving complex challenges across the entire web development stack. My aim is to craft efficient and intuitive digital solutions.
      </p>
    </div>
 
    <div className="btns">
      <h4>Are you a Cole fan? </h4>
      <button className="play"><Link href={"/video"}><Image alt="jcole" src="/playbutton.png" height={30} className="playimg" width={30}></Image>Play Video</Link></button>
    </div>
     <div className="icons">
      <Link href={"https://api.whatsapp.com/send/?phone=254711466962&text&type=phone_number&app_absent=0&wame_ctl=1"}><Image alt="whatsapp" src="/Whatsapp.png" width={30} height = {30}></Image></Link>
      <Link href={"https://www.instagram.com/authurprime_?igsh=aDF0OWp6M2djODFs"}><Image alt="instagram" src="/Instagram.svg" width={30} height = {30}></Image></Link>
      <Link href={"https://www.linkedin.com/in/authur411b6a348/"}><Image alt="linkedin"  src="/linkedin1.png" width={30} height = {30}></Image></Link>
      <Link href={"https://www.tiktok.com/@authurprime?_t=ZM-8xNCEExYTTi&_r=1"}><Image alt="tiktok" src="/tiktok1.webp" width={30} height = {30}></Image></Link>
      <Link href={"https://x.com/AuthurB49950?t=6lza87D1KC5OqX5OXzMSaw&s=09"}><Image alt="X" src="/x.png" width={30} height = {30}></Image></Link>
    </div>
  </div>
  <div className="myinfo">
    <Image width={470} height={660} src="/cole.jpg" alt="" />
  </div>
  </div>
 </div>
)
}
