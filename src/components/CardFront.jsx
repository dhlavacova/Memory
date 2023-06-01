import {useContext, useState} from 'react';
import './cardFront.scss'
import 'animate.css';
import {MemoryContext} from "../Context.jsx";
const CardFront = () => {
    const {data} = useContext(MemoryContext)
    const karten = [...data, ...data]

    for (let i = karten.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = karten[i];
        karten[i] = karten[j];
        karten[j] = temp;
    }
console.log(karten)

     const [item,setItem] =useState('')
    return (
        <div className='' onClick={()=>console.log('klik')} >

            {karten.map(el => <img className="backpage "key={crypto.randomUUID()} src={el.image} alt={el.name}  onChange={(e)=>setItem(e.target.style.visibility = "hidden")}/>)
            }
        </div>
    );
};

export default CardFront;