import './Card.css';
import React from 'react';
function Card(props){
    return(
        
                            <div class="cardsSale">
                                <div class="cardPolosa" style={props.polosa}></div>
                                <h3 class="cardlevel" style={props.level}>{props.l}</h3>
                                <h1 class="cardS" style={props.s}>{props.c}</h1>
                                <div class="cartt1">{props.t1}</div>
                                <div class="cartt1">{props.t2}</div>
                                <div class="cartt1">{props.t3}</div>
                                <button class="cardButton">Get Tickets</button>
                            </div>

    )
}
export default Card;