import i from './photo/Img.png'
import i1 from './photo/Img (1).png'
import i2 from './photo/Img (2).png'
import i3 from './photo/Img (3).png'
import i4 from './photo/Img (4).png'
import i5 from './photo/Img (5).png'
import i6 from './photo/Img (6).png'
import i7 from './photo/Img (7).png'
import './Sponsor.css';
import { useState } from 'react';
import Button from '../FirdForm/Button'
import SponsorEndInfo from './SponsorEndInfo'
import React from 'react';
import emailjs from "emailjs-com"
function Sponsor() {

   
    const [sponsorActive, setSponsorActive] = useState(false);
    return (

        <div class="sponsors" id="sponH">
            <SponsorEndInfo active={sponsorActive} setActive={setSponsorActive}/>
            <h2 class="titleTier" id="company">Our Sponsors</h2>
            <div class="sponsor">
                <div class="blockSponsors">
                    <img class="sponImg" src={i} />
                    <img class="sponImg" src={i1} />
                    <img class="sponImg" src={i2} />
                    <img class="sponImg" src={i3} />
                </div>
                <div class="blockSponsors">
                    <img class="sponImg" src={i4} />
                    <img class="sponImg" src={i5} />
                    <img class="sponImg" src={i6} />
                    <img class="sponImg" src={i7} />
                </div>


            </div>

            <button class='button' onClick={() => setSponsorActive(true)} >Become a Sponsor</button>

        </div>
    )
}
export default Sponsor;