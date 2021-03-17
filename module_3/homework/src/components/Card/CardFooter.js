import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const toggleCollapse = () => {
    const collapse = document.querySelector('.card__collapse');
    collapse.classList.toggle('show');
    
    const icon = document.querySelector('.card__footer svg.fa-chevron-down');
    icon.classList.toggle('rotate'); 
}

function CardFooter({ showMore }) {
    if (showMore) {
        return (
            <div className="card__footer">
                <FontAwesomeIcon icon="chevron-down" onClick={toggleCollapse} />
            </div>
        );
    }

    return <></>;
}

export default CardFooter;