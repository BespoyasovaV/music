import './Timer.css';
import React from 'react';

function Timer() {
    return (
        <div class="main_block-timer">
            <div class="countdown">
                <div class="time-section">
                    <span class="count" id="days">00</span>
                    <span class="units">d</span>
                </div>
                <div class="time-section">
                    <span class="count" id="hours">00</span>
                    <span class="units">h</span>
                </div>
                <div class="time-section">
                    <span class="count" id="minutes">00</span>
                    <span class="units">m</span>
                </div>
                <div class="time-section">
                    <span class="count" id="seconds">00</span>
                    <span class="units">s</span>
                </div>
            </div>

        </div>
    )
}


function countdown(dateEnd) {
    let timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if (isNaN(dateEnd)) {
        return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
        let dateStart = new Date();
        dateStart = new Date(dateStart.getUTCFullYear(),
            dateStart.getUTCMonth(),
            dateStart.getUTCDate(),
            dateStart.getUTCHours(),
            dateStart.getUTCMinutes(),
            dateStart.getUTCSeconds());
        let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);


            
           let v1= document.getElementById("days");
           if(v1!=null) {v1.innerHTML= parseInt(days, 10);}
           let v2=document.getElementById("hours");
            if(v2!=null){v2.innerHTML=("0" + hours).slice(-2);}
            let v3=
            document.getElementById("minutes");
            if(v3!=null){ v3.innerHTML= ("0" + minutes).slice(-2);}
            let v4=document.getElementById("seconds");
            if(v4!=null){v4.innerHTML=("0" + seconds).slice(-2);}
        } else {
            return;
        }
    }

    function display(days, hours, minutes, seconds) { }
}


countdown('07.21.2023 02:00:00 AM');
export default Timer;