import React from 'react';
import '../styles/CreationCard.css';
import Newline from './Newline';

function CreationCard({ image, title }) {
    return (
        <div className="creationCard">
            <div className="creationCard__image" style={{ backgroundImage: `url(${image})` }}></div>
            <Newline text={title} />
        </div>
    )
}

export default CreationCard
