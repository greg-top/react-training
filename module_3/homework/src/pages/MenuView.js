import React from 'react';

import Menu from '../components/Menu/Menu';

import './assets/css/menu-view.css';

function MenuView() {
    return (
        <div className="menu-view">
            <h2>Zadanie 5 - Menu</h2>
            <div className="menu--outer">
                <Menu />
            </div>
        </div>
    );
}

export default MenuView;