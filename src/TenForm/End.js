import Blue from "./Blue";
import Gray from "./Gray";
import "./End.css"
import Foot from "./Foot";
import React from 'react';

function End(){
    return(
        <div>
        <div className="footer"> 
            <Blue/>
            <Gray/>
        </div>
        <Foot/>
        </div>
    )
}
export default End;