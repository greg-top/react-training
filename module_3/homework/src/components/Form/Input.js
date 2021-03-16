import React from 'react';

function Input({ background, color, border, bradius, bcolor, bsize, bstyle,  placeholder }) {
    return <input 
        style={{ 
            backgroundColor:background, 
            color: color, 
            borderRadius: bradius, 
            border: border, 
            borderStyle: bstyle,
            borderWidth: bsize,
            borderColor: bcolor
        }} 
        placeholder = {placeholder} />
}

export default Input;