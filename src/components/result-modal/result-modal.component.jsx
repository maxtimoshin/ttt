import React from 'react'
import './result-modal.styles.scss'

const ResultModal = ({ resultModal, result, closeResultWindow }) => {
    return (
        <div className={resultModal ? 'result-modal' : 'result-modal-hidden'}>
            <div className='modal-bg'></div>
            <div className='modal'>
                <span>{result.winner == 'X' || result.winner == 'O' ? `ПОБЕДИЛ ИГРОК ${result.winner}` : 'НИЧЬЯ'}</span>
                <button className='modal-btn' onClick={closeResultWindow}>PLAY AGAIN</button>
            </div>
        </div>
    )
}

export default ResultModal