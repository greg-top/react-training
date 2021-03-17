import React from 'react';


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const date = new Date();
const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

function CartHeader({ initials, title }) {
    return (
    <div className="card__header">
        <p className="card__header-initials">{initials}</p>
        <div className="card__header-title--container">
            <p className="card__header-title">{title}</p>    
            <p className="card__header-date">{month} {day}, {year}</p>
        </div>
    </div>
    );
}

export default CartHeader;