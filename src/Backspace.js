import React from 'react'
import './Backspace.css';

export const Backspace=(props)=>{
    return (
    <div className="backsp" onClick={()=>props.handleClick(props.children)}>
        {props.children}
    </div>
    )
}

