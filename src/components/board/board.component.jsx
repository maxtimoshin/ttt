import React from 'react'
import './board.styles.scss'
import Square from '../square/square.component'

function Board({board, playerTurn}) {
    return (
        <div className='board'>
            <div className='row'>
                <Square value={board[0]} playerTurn={() => { playerTurn(0) }} />
                <Square value={board[1]} playerTurn={() => { playerTurn(1) }} />
                <Square value={board[2]} playerTurn={() => { playerTurn(2) }} />
            </div>
            <div className='row'>
                <Square value={board[3]} playerTurn={() => { playerTurn(3) }} />
                <Square value={board[4]} playerTurn={() => { playerTurn(4) }} />
                <Square value={board[5]} playerTurn={() => { playerTurn(5) }} />
            </div>
            <div className='row'>
                <Square value={board[6]} playerTurn={() => { playerTurn(6) }} />
                <Square value={board[7]} playerTurn={() => { playerTurn(7) }} />
                <Square value={board[8]} playerTurn={() => { playerTurn(8) }} />
            </div>
        </div>
    )
}

export default Board