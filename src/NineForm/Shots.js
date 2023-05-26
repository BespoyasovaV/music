import Follow from './Follow';
import './Shots.css';
import j1 from './Img (8).png'
import j2 from './Img (9).png'
import j3 from './Img (10).png'
import j4 from './Img (11).png'
import j5 from './Img (12).png'
import { useState } from 'react'
import React from 'react';

function Shots() {
   
    const [card, setCard] = useState([<Follow ph={j1} />, <Follow ph={j2} />,
    <Follow ph={j3} />,
    <Follow ph={j4} />,
    <Follow ph={j5} />])
    const buttClick = () => {
        const copyCard=[...card];
        const first=copyCard[0];
        for(let i=1;i<5;i++){
            copyCard[i-1]=copyCard[i];

        }
        copyCard[4]=first;
        setCard(copyCard);

    }

   
    return (
        <div>
            <h2 class="titleTier">See our Best Shots</h2>

            <div className='follow'>
                <button className='folBut' onClick={buttClick}>&gt;</button>
                <button className='folBut1' onClick={buttClick}>&lt;</button>
                {card}
            </div>



        </div>
    )
}

export default Shots;