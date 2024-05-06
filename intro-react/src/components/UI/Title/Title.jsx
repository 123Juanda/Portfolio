import React from "react";


export const Tittle = ({content, image, style}) =>{
    return(
        <div className={style}>
            <img src={image} alt="" />
            <h1>{content}</h1>
            
        </div>
    )
}