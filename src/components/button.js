import React from 'react';
import './style.css'

const Button = (props) => {

    
    return (
        <input type='button' value={props.label} onClick={props.handleClick} />
    );
};

export default Button;