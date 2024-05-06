import React from 'react'
import './Image.css'

export const Image = ({image}) => {
  return (
    <div className={image}>
      <img src='/image/logoSena.png' alt="" />
    </div>
  )
}