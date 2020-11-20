import React from 'react';
import './Button.css';

const isOperator=(val)=>{
    return !isNaN(val) || val===".";
}

const isEqual=(val)=>{
    return val==="=";
}

export const Button=(props)=>{
    return(
    <div className={`button-wrapper ${isOperator(props.children)? null : isEqual(props.children)? "equal" : "operator"}`} onClick={()=>props.handleClick(props.children)}>
        {props.children}
    </div>
    );
};
