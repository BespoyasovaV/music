import './Singers.css';
import Button from '../FirdForm/Button';
import logo from './pictures/ltop.png';
import logo1 from './pictures/lbottom.png';
import logo2 from './pictures/rtop.png';
import logo3 from './pictures/rbottom.png';
import React from 'react';

function Singers() {

    return (
        <div class='all'>
            <div class='content'>
                <div class='title'><h2>Singers</h2></div>
                <div class='text'>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</div>
                <Button s={'View All Singers'} />
            </div>
            <div class='piktures'>
                <div class='img1'>
                    <div><img id='pikture1'src={logo} /></div>
                    <div ><img id='pikture2' src={logo1} /></div>
                </div>
                <div class='img2'>
                    <div ><img id='pikture3'src={logo2} /></div>
                    <div ><img id='pikture4'src={logo3} /></div>
                </div>

            </div>
        </div>
    )
}
export default Singers;