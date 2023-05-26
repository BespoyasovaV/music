import "./Foot.css"
import v4 from './V4.png'
import v5 from './V5.png'
import v6 from './V6.png'
import v7 from './V7.png'
import l from './Logo.png'
import React from 'react';
function Foot(){
    return(
        <div class="k2">
            <div class="mus"><img src={l}/></div>
            <div class="konec">
                <div class="d2">
                    <a class="menu2" href="#home">HOME</a>
                    <a class="menu2" href="#company">COMPANY</a>
                    <a class="menu2" href="#blog">BLOG</a>
                    <a class="menu2" href="#contacy">CONTACTUS</a>
                    <a class="menu2" href="#map">SITEMAP</a>
                </div>
                <div class="d2">
                    <div class="menu2"><img  class="ki" src={v4}/></div>
                    <div class="menu2"><img class="ki"  src={v5}/></div>
                    <div class="menu2"><img class="ki"  src={v6}/></div>
                    <div class="menu2"><img class="ki"  src={v7}/></div>
                   

                </div>
            </div>
        </div>
    )
}
export default Foot;