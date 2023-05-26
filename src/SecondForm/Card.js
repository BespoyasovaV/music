import "./Card.css"
import React from 'react';
function Card(props){
    return(
        <div class={props.class1}  id={props.id}>
                    <img className="card_image" src={props.logo} alt='h' />
                    <h3>{props.name}</h3>
                    <span>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</span>
                </div>
    )
}
export default Card;