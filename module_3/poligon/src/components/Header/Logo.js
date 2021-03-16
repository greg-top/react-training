import React from 'react';

import logoImg from './assets/logo.png';

const styles = {
    width: 150,
    heigh: 'auto'
};

function Logo() {
    return (
    <div>
        <img style={styles} src={logoImg} alt="" />
    </div>
    )
}

export default Logo;