import Button from '../FirdForm/Button';
import './SponsorEndInfo.css'
import React from 'react';
import { useRef } from 'react';
import emailjs, { send } from "emailjs-com"
function SponsorEndInfo({ active, setActive }) {


    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z3ranqo', 'template_3evzmhk', e.target, 'iYaAkgxwKX7Zm20N3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setActive(false);
    }

    const onClick = () => { setActive(false) }

    return (
        <div className={active ? "modal active" : "modal"} onClick={onClick}>
            <div className="modCon" onClick={e => e.stopPropagation()}>
                <div className="modTitl">Заполните карточку</div>
                <form ref={form} onSubmit={sendEmail}>
                    <div>

                        <input placeholder='Name' type="text" name="user_name" />
                       
                    </div>
                    <div>

                        <input placeholder='Email' type="" name="user_email" />
                    </div>
                    <div>

                        <textarea placeholder='Your Message' name="message" />
                    </div>
                    <input className='sendButton' type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}
export default SponsorEndInfo;