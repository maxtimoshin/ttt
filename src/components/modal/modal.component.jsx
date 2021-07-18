import React, { useState } from 'react'
import './modal.styles.scss'

const Modal = ({ modal, setUserName}) => {

    const [name, setName] = useState(null)

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const setUser = () => {
        setUserName(name)
    }
    return (
        <div className={modal ? 'modal-window' : 'modal-window-hidden'}>
            <div className='modal-bg'></div>
            <div className='modal'>
                <span>ENTER YOUR NAME</span>
                <input type='text' className='modal-input' onChange={nameChange} maxlength="8">
                </input>
                <button className='modal-btn' onClick={setUser}>PLAY</button>
            </div>
        </div>
    )
}


export default Modal