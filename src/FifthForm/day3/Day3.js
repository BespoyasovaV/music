import './Day3.css';
import avatar from '../avatars/Avatar.png';
import play from '../avatars/play.png';
import av3 from '../avatars/av3.png';
import av2 from '../avatars/av2.png';
import av4 from '../avatars/av4.png';
import av5 from '../avatars/av5.png';
import vid from '../avatars/Vid.png';
import React from 'react';
function Day3() {
    return (
        <div class="contentSchedule" id="day3">
            <div class="textSchedule">
                <div class="textScheduleDiv">Time</div>
                <div class="textScheduleDiv">Content</div>
                <div class="textScheduleDiv">Speakers</div>
                <div style={{ color: 'rgba(56, 29, 219, 0)' }}> Speakers</div>
            </div>
            <div class="textScheduleFirst">
                <div class="firstColomn">11:00 AM to 12:00 PM</div>
                <div class="secondColomn">Vestibulum vel eros vel metus lacinia feugiat a nec metus.
                </div>
                <div class="firdColomn">
                    <div class="allfird">
                        <div> <img src={avatar} /></div>
                        <div class="firdColomnContent">
                            <div class="firdColomnContentName">Yui Ronald</div>
                            <div class="firdColomnContentTitle">Booth: 2F12</div>
                        </div>
                    </div>
                </div>
                <div class="fothColomn">
                    <div>
                        <h5 id="imgplay">Preview</h5>
                    </div>
                    <div> <img id="imgplayi" src={{ play }} alt="" /></div>
                </div>

            </div>
            <div id="polosa"></div>

            <div class="textScheduleFirst">
                <div class="firstColomn">12:00 PM to 03:00 PM</div>
                <div class="secondColomn">Duis nec sodales nibh. Proin lectus tortor, rutrum vel
                    vulputate
                    vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent
                    porttitor
                    convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non
                    lacus
                    ac rhoncus. Morbi quis luctus leo, nec cursus ex. </div>

                <div class="firdColomn">
                    <div class="allfird">
                        <div> <img src={avatar} /></div>
                        <div class="firdColomnContent">
                            <div class="firdColomnContentName">Bob John</div>
                            <div class="firdColomnContentTitle">Booth: 3G12</div>
                        </div>
                    </div>
                    <div class="allfird">
                        <div> <img src={av2} /></div>
                        <div class="firdColomnContent">
                            <div class="firdColomnContentName">Yui Ronald</div>
                            <div class="firdColomnContentTitle">Booth: 2F12</div>
                        </div>
                    </div>
                    <div class="allfird">
                        <div> <img src={av3} /></div>
                        <div class="firdColomnContent">
                            <div class="firdColomnContentName">Emma Satoshi</div>
                            <div class="firdColomnContentTitle">Booth: 2A35</div>
                        </div>
                    </div>
                </div>

                <div class="fothColomn">
                    <div>
                        <h5 id="imgplay" style={{ color: 'rgba(252, 82, 82, 1)' }}>Live</h5>
                    </div>
                    <div> <img id="imgplayi" src={vid} alt=""/></div>
                </div>

            </div>

            <div id="polosa"></div>

            <div class="textScheduleFirst">
                <div class="firstColomn">03:00 PM to 04:00 PM</div>
                <div class="secondColomn">Vestibulum vel eros vel metus lacinia feugiat a nec metus.
                </div>
                <div class="firdColomn" id="firdColom">
                    <div class="allfird">
                        <div> <img src={av4} /></div>
                        <div class="firdColomnContent">
                            <div class="firdColomnContentName">Sasha Jackson</div>
                            <div class="firdColomnContentTitle">Booth: 2F18</div>
                        </div>
                    </div>
                    <div class="allfird">
                        <div> <img src={av5} /></div>
                        <div class="firdColomnContent">
                            <div class="firdColomnContentName">Diana Brock</div>
                            <div class="firdColomnContentTitle">Booth: 2F24</div>
                        </div>
                    </div>
                </div>
                <div class="fothColomn">
                    <div>
                        <h5 id="imgplay">Upcoming</h5>
                    </div>
                    <div> <img id="imgplayi" src={play} alt="" /></div>
                </div>

            </div>
        </div>
    )
}
export default Day3;