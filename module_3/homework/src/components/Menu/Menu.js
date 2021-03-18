import React from 'react';

import MenuLink from './MenuLink';

import './assets/menu.css';

function Menu({ children }) {
    return (
        <ul className="menu">
            <MenuLink to="/">Link 1</MenuLink>
            <MenuLink to="/">Link 2</MenuLink>
            <MenuLink to="/" isActive>Link 3</MenuLink>
            <MenuLink to="/">Link 4</MenuLink>
        </ul>
    );
}

export default Menu;