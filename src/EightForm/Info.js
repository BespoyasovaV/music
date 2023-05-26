import './Info.css'
import logo1 from './Avatar (1).png'
import logo2 from './Avatar (2).png'
import logo3 from './Avatar (3).png'
import React from 'react'
function Info(props) {
    return (
        <a class='cardD'>
            <div className='textcardd'>
                <div className='textcd'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
         </div> 
         <div className='photocard'><img src={props.photo}/></div> 
           <h4 className='namecard'>{props.name}</h4>
            
        </a>
    )
}
export default Info;