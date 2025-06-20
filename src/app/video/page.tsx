"use client"
import React from 'react'
import styles from "./video.module.css"


const Video = () => {
  return (
    <div className={styles.body}>
      <video className={styles.video} controls src="/J.Cole _Love Yourz_ (Official Music Video)(1080P_HD).mp4"></video>
    </div>
  )
}

export default Video
