import React from 'react';

function MenuLink({ to, isActive, children }) {
    if(isActive) {
        return (
            <li className="menu__element"><a href={to} className="menu__link menu__link--is-active">{ children }</a></li>
        );
    } else {
        return (
            <li className="menu__element"><a href={to} className="menu__link">{ children }</a></li>
        );
    }
}

export default MenuLink;