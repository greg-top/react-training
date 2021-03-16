import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    span: {
        marginRight: 5
    }
}

function Button({ background = "yellow", color="blue" , icon="coffee", children }) {

    return (
    <>
        <button style={{backgroundColor: background, color: color}}>
            <span style={styles.span}><FontAwesomeIcon icon={icon} /></span>
            {children}
        </button>
    </>
    );
}

export default Button;