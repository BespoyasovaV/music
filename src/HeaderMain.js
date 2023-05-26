import React from 'react';
function HeaderMain(){
    return(

        <div class="page_main-block main-block">
        <div class="main_block-conteiner _container">
            <div class="main_block-body">
                <div class="main_block-title">The Best Experience Of Music
                    In 2021</div>
                
                <div class="main_block-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus
                    lectus.</div>
                <div class="main_block-buttons">
                    <button class="main_block-button" id="getStarted">Get Started</button>

                    <div class="main_block-button-noborder">
                        <div>
                            <img class="main_block-button-noborder-img" src="Vector.png"/>
                        </div>
                        <div class="main_block-button-noborder_text">
                            Watch Video
                        </div>
                    </div>
                </div>


            </div>
           
        </div>
        <div class="main_block-image  _ibg">
            <img src="src/Img.jpg" alt="cover"/>
        </div>
    </div>
    
    );
}
export default HeaderMain;