import "./Vid.css"
import video from  './timessquarenightwide.mp4'
import React from 'react';
function Vid(props){
    return(
        <video class="bgvideo" id="bgvideo" loop="loop" preload="auto" muted="muted" controls="controls"  autoPlay>
        <source src={video} type="video/mp4"></source>
    </video>
    )
}
export default Vid;