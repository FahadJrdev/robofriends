import React from 'react';
import './Card.css';

const Card = ({name, email, id}) => {
    return(
        <div className="card pointer tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
            <div className='same'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;