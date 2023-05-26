
import './Blue.css';
import v1 from './V1.png'
import v2 from './v2.png'
import v3 from './V3.png'
import React from 'react';
function Blue(){
    return(
        <div class="blue" id="contacy">
            <h2 class="cu">Contact us</h2>
            <div class="hav">Have an inquiry? We’ll be happy to assist you</div>
            <div class="allkon">
                <div class="kon"> <img src={v1}/>
                    <h5 class="h5kon">+92 333 6527366</h5>
                </div>
                <div class="kon"> <img src={v2}/>
                    <h5 class="h5kon">abuzer@greelogix.com</h5>
                </div>
                <div class="kon"> <img src={v3}/>
                    <h5 class="h5kon">Plot 252, Block L Phase 2 Johar Town, Lahore, PK</h5>
                </div>
            </div>
        </div>
    )
}
export default Blue;