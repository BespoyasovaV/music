import "./Modal.css"
import React from 'react';
function Modal({ active, setActive }) {
    const onClick = () => { setActive(false) }

    return (
        <div className={active ? "modal active" : "modal"} onClick={onClick}>
            <div className="modCon" onClick={e => e.stopPropagation()}>
                <div className="modTitl">Вот окно</div>
                <div className="modText">Оно модальное, очень крутое.!</div>
            </div>
        </div>
    )
}
export default Modal;