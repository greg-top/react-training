import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './assets/card.css';
import image from './assets/paella.jpg';

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

const toggleCollapse = () => {
    const collapse = document.querySelector('.card__collapse');
    collapse.classList.toggle('show');
    
    const icon = document.querySelector('.card__footer svg.fa-chevron-down');
    icon.classList.toggle('rotate'); 
}

function Card({ initials, title, intro, showMore, collapse }) {
    return (
        <div className="card">
            <div className="card__header">
                <p className="card__header-initials">{initials}</p>
                <div className="card__header-title--container">
                    <p className="card__header-title">{title}</p>    
                    <p className="card__header-date">{month} {day}, {year}</p>
                </div>
            </div>
            <div className="card__body">
                <div className="card__body-img--container">
                    <img src={image} className="card__body-img" alt={title} />
                </div>
                <div className="card__body-intro">
                    <p>{intro}</p>
                </div>
            </div>
            <div className="card__footer">
                <FontAwesomeIcon icon="chevron-down" onClick={toggleCollapse} />
            </div>
            <div className="card__collapse hidden">
                <p>{collapse}</p>
            </div>
        </div>
    );
}

export default Card;