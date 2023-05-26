import Info from './Info';
import logo1 from './Avatar (1).png'
import logo2 from './Avatar (2).png'
import logo3 from './Avatar (3).png'
import './Test.css'
import React from 'react';
import { useState } from 'react'
function Test() {

    const [c1, setC1] = useState(true);
    const [c2, setC2] = useState(false);
    const [c3, setC3] = useState(false);

    const c1Click = () => {
        console.log(c1)
        setC1(true);
        setC2(false);
        setC3(false);
    }
    const c2Click = () => {

        setC2(true);
        setC1(false);
        setC3(false);
    }
    const c3Click = () => {

        setC3(true);
        setC2(false);
        setC1(false);
    }
    if (c1 == true) {
        return (
            <div >
                <h2 class="titleTier">Testimonials</h2>
                <div class='all'>
                    <div className='allFirst gray' onClick={c2Click}>
                        <Info photo={logo2} name={'Johnny Doe'} />
                    </div>
                    <div className='allFirst' onClick={c1Click}>
                        <Info photo={logo1} name={'Ellie James'} />
                    </div>
                    <div className='allFirst gray' onClick={c3Click}>
                        <Info photo={logo3} name={'Myne Barack'} />
                    </div>
                </div>
            </div>
        )
    }
    if (c2 == true) {
        return (
            <div >
                <h2 class="titleTier">Testimonials</h2>
                <div class='all'>
                    <div className='allFirst gray ' onClick={c3Click}>
                        <Info photo={logo3} name={'Myne Barack'} />
                    </div>
                    <div className='allFirst' onClick={c2Click}>
                        <Info photo={logo2} name={'Johnny Doe'} />
                    </div>
                    <div className='allFirst gray' onClick={c1Click}>
                        <Info photo={logo1} name={'Ellie James'} />
                    </div>

                </div>
            </div>
        )
    }
    if (c3 == true) {
        return (
            <div >
                <h2 class="titleTier">Testimonials</h2>
                <div class='all'>
                    <div className='allFirst gray' onClick={c1Click}>
                        <Info photo={logo1} name={'Ellie James'} />
                    </div>
                    <div className='allFirst' onClick={c3Click}>
                        <Info photo={logo3} name={'Myne Barack'} />
                    </div>
                    <div className='allFirst gray' onClick={c2Click}>
                        <Info photo={logo2} name={'Johnny Doe'} />
                    </div>


                </div>
            </div>
        )
    }

    return (

        <div >
            <h2 class="titleTier">Testimonials</h2>
            <div class='all'>
                <div className='allFirst gray' onClick={c2Click}>
                    <Info photo={logo2} name={'Johnny Doe'} />
                </div>
                <div className='allFirst' onClick={c1Click}>
                    <Info photo={logo1} name={'Ellie James'} />
                </div>
                <div className='allFirst gray' onClick={c3Click}>
                    <Info photo={logo3} name={'Myne Barack'} />
                </div>
            </div>
        </div>
    )
}

export default Test;