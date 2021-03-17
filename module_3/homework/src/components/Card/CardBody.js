import React from 'react';

import image from './assets/paella.jpg';

function CardBody({ intro }) {
    return (
        <div className="card__body">
        <div className="card__body-img--container">
            <img src={image} className="card__body-img" alt="" />
        </div>
        <div className="card__body-intro">
            <p>{intro}</p>
        </div>
    </div>
    );
}

export default CardBody;