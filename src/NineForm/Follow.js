import './Follow.css';
import k2 from  './hart.png'
import k3 from  './ask.png'
import React from 'react';

function Follow(props) {
    return(
        <div className='folCard'>
            <div className='folImg'> <img src={props.ph}/></div>
            <div className='folImgs'>
                <img src={k2}/>
                412
                <img src={k3}/>
                569
            </div>
            <div className='folTitle'>Lorem Ipsum Amet</div>
            <div className='folText'>#music #concert #conference #london #event #artist #dj #soundtrack #dance</div>
        </div>
    )
}
export default Follow;