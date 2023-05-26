import './Music.css';
import logo from './mucismg.png';
import logo1 from './music_back.png';
import Button from './Button';
import React from 'react';

function Musik() {
    return (
        <div class='all' id="blog">
            <div class='piktures'>
                <div class='pikture2'><img src={logo1} /></div>
                <div class='pikture1'><img src={logo} /></div>

            </div>
            <div class='content'>
                <div class='title'><h2>About Musik</h2></div>
                <div class='text'>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</div>
                <Button s={'Learn More'}/>
            </div>
        </div>
    )
}
export default Musik;