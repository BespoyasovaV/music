import './Caterory.css';
import logo from './pop.jpg';
import logo1 from './folk.png';
import logo2 from './Instr.png';
import logo3 from './Guitar.png';
import logo4 from './Trumpet.png';
import Card from './Card';
import React from 'react';

function Category() {
   
    return (
        <div class='category'>
            <div class='title'><h2><span style={{ color: 'rgba(56, 29, 219, 1)' }}>Explore</span> By Category</h2></div>
            <div class='cards'>
    
                <Card class1={'card card1'} id={'pop'} logo={logo} name={'Pop'}/>
                <Card class1={'card card2'} id={'folk'} name={'Folk'} logo={logo1}/>
                <Card class1={'card card3'} id={'instrumental'}  name={'Instrumental'}logo={logo2}/>
                <Card class1={'card card4'} id={'rock'}  name={'Rock'}logo={logo3}/>
                <Card class1={'card card5'} id={'jazz'} name={'Jazz'}  logo={logo4}/>
                
               
            </div>
        </div>
    )

}


export default Category;