import React from 'react';
import './memory.scss'

const Memory = ({data}) => {
    const karten = [...data, ...data]

    for (let i = karten.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = karten[i];
        karten[i] = karten[j];
        karten[j] = temp;
    }

    return (
        <div className="container">

            {karten.map(el => <img key={el.id} src={el.image} alt={el.name}/>)
            }
        </div>
    );
};

export default Memory;