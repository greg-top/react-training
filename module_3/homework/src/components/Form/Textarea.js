import React from 'react';

function Textarea({ background, color, border, bradius, bcolor, bsize, bstyle,  placeholder }) {
    return <textarea 
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

export default Textarea;