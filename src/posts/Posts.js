import React from 'react'
import './posts.css'
import hi from './elon.jpeg.jpeg'

export default function Posts() {
  return (
    <div className="posts">
        
        <div className="postContent">
            <img width={400} height={400} src={hi} alt="" />

        </div>
    </div>
  )
}