import React from 'react';

function CardCollapse({ collapse }) {
    return (
        <div className="card__collapse hidden">
            <p>{collapse}</p>
        </div>
    );
}

export default CardCollapse;