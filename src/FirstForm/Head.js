
import './Head.css';
import logo from './VectorStroke.png';
import Vid from './Vid';
import video from  './timessquarenightwide.mp4'
import React from 'react';

function Head() {
    return (
        <div className='headTittle'>
           <Vid />
            <p class='logoHead'>
                Musik.
            </p>
            <div class='menuHead'>
                <button class='firstMenu' id="home">HOME</button>

                <div class="dropdown">
                    <button class="dropbtn">SPEAKERS  <img src={logo} /></button>
                    <div class="dropdown-content">
                        <a href="#">Ariana Grande</a>
                        <a href="#">Ed Sheeran</a>
                        <a href="#">Miley Curys</a>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">SCHEDULE  <img src={logo} /></button>
                    <div class="dropdown-content">
                        <a href="#">10:00-12:00</a>
                        <a href="#">13:00-15:00</a>
                        <a href="#">17:00-21:00</a>
                    </div>
                </div>


                <button class='firstMenu'>CONTACT US</button>
                <button class='firstMenuUn'>GET TICKETS</button>

            </div>
        </div>
    )
}

export default Head;