import React, { useState, useEffect } from 'react'
import Board from '../board/board.component'
import Info from '../info/info.component'
import './game.styles.scss'
import { Patterns } from '../../patterns'
import Modal from '../modal/modal.component'
import ResultModal from '../result-modal/result-modal.component'

const Game = () => {
    const [modal, setModal] = useState(true)
    const [resultModal, setResultModal] = useState(false)
    const [person, setPerson] = useState('Player1')
    const [board, setBoard] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState('O')
    const [result, setResult] = useState({ winner: 'none', state: 'none' })

    useEffect(() => {
        checkWin()
        checkIfTie()
        player == 'O' ? setPlayer('X') : setPlayer('O')
    }, [board])

    useEffect(() => {
        if (result.state != 'none') {
            setResultModal(true)
            restartGame()
        }
    }, [result])

    const playerTurn = (square) => {
        setBoard(board.map((value, index) => {
            if (index == square && value == '') {
                return player
            }
            return value
        }))
    }

    const checkWin = () => {
        Patterns.forEach((currentPattern) => {
            const firstPlayer = board[currentPattern[0]]
            if (firstPlayer == '') return
            let foundWinningPattern = true
            currentPattern.forEach((index) => {
                if (board[index] != firstPlayer) {
                    foundWinningPattern = false
                }
            })
            if (foundWinningPattern) {
                setResult({ winner: player, state: 'Победа' })
            }
        })
    }

    const checkIfTie = () => {
        let filled = true
        board.forEach((square) => {
            if (square == "") {
                filled = false
            }
        })

        if (filled) {
            setResult({ winner: 'Ничья', state: 'Ничья' })
        }
    }

    const restartGame = () => {
        setBoard(Array(9).fill(''))
        setPlayer('O')
    }

    const setUserName = (value) => {
        setPerson(value == null ? 'Player1' : value)
        setModal(false)
    }

    const closeResultWindow = () => {
        setResultModal(false)
    }

    return (
        <div className='game-panel'>
            <Board board={board} playerTurn={playerTurn} />
            <Info result={result} person={person} />
            <Modal modal={modal} setUserName={setUserName} />
            <ResultModal resultModal={resultModal} result={result} closeResultWindow={closeResultWindow}/>
        </div>
    )
}

export default Game