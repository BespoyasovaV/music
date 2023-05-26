import './Button.css';
import logo2 from './Vector.png';
import React from 'react';
function Button(props){

    return(
        <button class='button'>
                    {props.s} <img src={logo2} />
                </button>
    )
}
export default Button;