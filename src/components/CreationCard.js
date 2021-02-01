import React from 'react';
import '../styles/CreationCard.css';
import Newline from './Newline';

function CreationCard({ image, title }) {
    return (
        <div className="creationCard">
            <img
                className="creationCard__image"
                src={image}
                alt="Loading..."
            />
            <Newline text={title} />
        </div>
    )
}

export default CreationCard
