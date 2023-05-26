import Content from './Content';
import './Schedule.css';
import {useState} from 'react'
import React from 'react';

function Schedule() {
    const [card1,setCard1]=useState(true);
    const [card2,setCard2]=useState(false);
    const [card3,setCard3]=useState(false);

    const card1Click=()=>{

        setCard1(true);
        setCard2(false);
        setCard3(false);
    }
    const card2Click=()=>{

        setCard2(true);
        setCard1(false);
        setCard3(false);
    }
    const card3Click=()=>{

        setCard3(true);
        setCard2(false);
        setCard1(false);
    }
    if(card1==false){
        return <div class='allTitle' id="map">
            <div>
            <h2 class="txtEventScheduler"> Event Scheduler</h2></div>
            <nav class="days">
                <a id="days1" href="#day1" class="alltitleDay"  onClick={card1Click}>
                    <h3 id="titleDay1" class="titleDay">Day 01</h3>
                    <h5 id="underTitleDay1" class="underTitle">16 August</h5>
                    <div id="indicatorDay1" class="indicator"></div>
                </a>
                <a id="days2" href="#day2" class="alltitleDay" onClick={card2Click}>
                    <h3 id="titleDay2" class="titleDay">Day 02</h3>
                    <h5 id="underTitleDay2" class="underTitle">17 August</h5>
                    <div id="indicatorDay2" class="indicator"></div>
                </a>
                <a id="days3" href="#day3" class="alltitleDay" onClick={card3Click}>
                    <h3 id="titleDay3" class="titleDay">Day 03</h3>
                    <h5 id="underTitleDay3" class="underTitle">18 August</h5>
                    <div id="indicatorDay3" class="indicator"></div>
                </a>
            </nav><Content/></div>
    }
    if(card2==false){
        return <div class='allTitle'>
            <div>
            <h2 class="txtEventScheduler"> Event Scheduler</h2></div>
            <nav class="days">
                <a id="days1" href="#day1" class="alltitleDay"  onClick={card1Click}>
                    <h3 id="titleDay1" class="titleDay">Day 01</h3>
                    <h5 id="underTitleDay1" class="underTitle">16 August</h5>
                    <div id="indicatorDay1" class="indicator"></div>
                </a>
                <a id="days2" href="#day2" class="alltitleDay" onClick={card2Click}>
                    <h3 id="titleDay2" class="titleDay">Day 02</h3>
                    <h5 id="underTitleDay2" class="underTitle">17 August</h5>
                    <div id="indicatorDay2" class="indicator"></div>
                </a>
                <a id="days3" href="#day3" class="alltitleDay" onClick={card3Click}>
                    <h3 id="titleDay3" class="titleDay">Day 03</h3>
                    <h5 id="underTitleDay3" class="underTitle">18 August</h5>
                    <div id="indicatorDay3" class="indicator"></div>
                </a>
            </nav><Content/></div>
    }
    if(card3==false){
        return <div class='allTitle'>
            <div>
            <h2 class="txtEventScheduler"> Event Scheduler</h2></div>
            <nav class="days">
                <a id="days1" href="#day1" class="alltitleDay"  onClick={card1Click}>
                    <h3 id="titleDay1" class="titleDay">Day 01</h3>
                    <h5 id="underTitleDay1" class="underTitle">16 August</h5>
                    <div id="indicatorDay1" class="indicator"></div>
                </a>
                <a id="days2" href="#day2" class="alltitleDay" onClick={card2Click}>
                    <h3 id="titleDay2" class="titleDay">Day 02</h3>
                    <h5 id="underTitleDay2" class="underTitle">17 August</h5>
                    <div id="indicatorDay2" class="indicator"></div>
                </a>
                <a id="days3" href="#day3" class="alltitleDay" onClick={card3Click}>
                    <h3 id="titleDay3" class="titleDay">Day 03</h3>
                    <h5 id="underTitleDay3" class="underTitle">18 August</h5>
                    <div id="indicatorDay3" class="indicator"></div>
                </a>
            </nav><Content/></div>
    }

    return (
        <div class='allTitle'>
            <div>
            <h2 class="txtEventScheduler"> Event Scheduler</h2></div>
            <nav class="days">
                <a id="days1" href="#day1" class="alltitleDay"  onClick={card1Click}>
                    <h3 id="titleDay1" class="titleDay day1">Day 01</h3>
                    <h5 id="underTitleDay1" class="underTitle day1">16 August</h5>
                    <div id="indicatorDay1" class="indicator day1"></div>
                </a>
                <a id="days2" href="#day2" class="alltitleDay" onClick={card2Click}>
                    <h3 id="titleDay2" class="titleDay day2">Day 02</h3>
                    <h5 id="underTitleDay2" class="underTitle day2">17 August</h5>
                    <div id="indicatorDay2" class="indicator day1"></div>
                </a>
                <a id="days3" href="#day3" class="alltitleDay" onClick={card3Click}>
                    <h3 id="titleDay3" class="titleDay day3">Day 03</h3>
                    <h5 id="underTitleDay3" class="underTitle day3">18 August</h5>
                    <div id="indicatorDay3" class="indicator day3"></div>
                </a>
            </nav>
            
        </div>
    )

}


export default Schedule;