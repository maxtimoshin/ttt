import React from 'react'
import './square.styles.scss'


function Square({ value, playerTurn}) {
    const style = value ? `square ${value}` : `square`
    return (

        <div onClick={playerTurn} className={style}>
            {value}
        </div>
    )
}

export default Square