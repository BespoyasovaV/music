import logo from './Vector.png';
import './Main.css';
import Modal from '../Modal';
import { useState } from 'react';
import React from 'react';

function Main() {
    const [modalActive,setModalActive]=useState(false);
    return (
        <div class='menuHead'>
             <Modal active={modalActive} setActive={setModalActive}/>
            <div class='menuTitle'>
                The Best Experience Of <span style={{ color: '#FFA3A3' }}>Music</span> In 2021
            </div>
            <div class='menuText'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.
            </div>
            <div class='menuButton'>
                <button class='start' onClick={()=>setModalActive(true)}>Get Started</button>
                <button class='watch' onClick={cl}>
                    <div><img src={logo} alt='h'></img> </div>
                    <div class='vid' id='start' onclick={watch}>Watch Video</div>
                </button>
            </div>
        </div>

    )
}

const watch=()=>{
    
}
var start = document.getElementById('start')
const wrapperVideo = document.getElementById('bgvideo');
var isMenuShow = true;
function cl() {

   if(wrapperVideo!=null){
        if (isMenuShow) {
           
            console.log("1")
           
                wrapperVideo.autoplay = true;
        
            isMenuShow = false;
        }
        else {
          
                wrapperVideo.autoplay = false;
        
        }
    
    }
}
export default Main;