

import React from 'react'
import styles from "./about.module.css"

const About = () => {
  return (
    <div className={styles.about}>
        <h1>About Me</h1>
      <div className={styles.wrapper}>
        
        <div className={styles.intro}>
            <p>Hello! I'm Authur, a passionate Full-Stack Developer with a knack for building intuitive and high-performing web applications. <br /> My journey in technology began with a fascination for how software can simplify complex tasks, leading me to immerse myself in the world of code. <br /> I thrive on turning innovative ideas into functional, user-friendly digital experiences.</p>
        </div>
        <div className={styles.vision}>
            <p>I believe in a collaborative and iterative development process, focusing on clean code, robust architectures, and continuous learning. <br />My goal is always to deliver solutions that are not only technically sound but also provide genuine value to the end-user.</p>
        </div>
      </div>
    <div className={styles.wrapper}>
              <div className={styles.toolkit}>
        <h2>My Toolkit:</h2>
    <ol>
        <li>Languages: JavaScript (ES6+), TypeScript, Python</li>
        <li>Frontend: React, Next.js, HTML5, CSS3</li>
        <li> Backend: Express.js</li>
        <li> Databases: MongoDB</li>
        <li>Tools: Git, GitHub, VS Code</li>
    </ol>
    </div>
 <div className={styles.specialize}>
   <h2> What I Build:</h2>
    <p>I specialize in creating dynamic web applications, scalable APIs, and responsive user interfaces. You can explore a selection of my projects in the Portfolio section, where I showcase how I've tackled various challenges using modern technologies.
Beyond the Code:
When I'm not developing, I enjoy exploring new hiking trails, experimenting with smart home tech, or diving into a good book. <br />
 These pursuits help me stay curious and bring a fresh perspective to my work.
Let's Connect!
I'm always eager to discuss new opportunities, collaborate on exciting projects, or simply share insights about web development. Feel free to reach out!</p>
 </div>
    </div>
    </div>
  )
}

export default About
