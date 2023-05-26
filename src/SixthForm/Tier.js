import Card from './Card';
import './Tier.css';
import React from 'react';
function Tier() {
    return(
    <div class="tier">
        <h2 class="titleTier">Choose a Tier that’s right for you</h2>
        <div class="cardSale">
        <Card polosa={{'border-top': '3px solid rgba(0, 0, 0, .1)'}} level={{color: 'rgba(34, 34, 34, 1)'}} l={'Basic'} c={'$100'} s={{color: 'rgba(34, 34, 34, 1)'}} t1={'1 Seat Available'} t2={'Access to Wifi Router'} t3={'Free Food & Coffee'} />
        <Card polosa={{'border-top': '3px solid rgba(56, 29, 219, 1)'}} level={{color: 'rgba(56, 29, 219, 1)'}} l={'Standard'} c={'$150'} s={{color: 'rgba(56, 29, 219, 1)'}} t1={'1 Seat Available'} t2={'Access to Wifi Router'} t3={'Free Food & Coffee'} />
        <Card polosa={{'border-top': '3px solid rgba(252, 82, 82, 1)'}} level={{color: 'rgba(252, 82, 82, 1)'}} l={'Premium'} c={'$200'} s={{color: 'rgba(252, 82, 82, 1)'}} t1={'2 Seats Available'} t2={'Access to Wifi Router'} t3={'Free Food & Coffee'} />
       
             </div>
    </div>
    )
}
export default Tier;