import React, { useState, useEffect } from 'react'
import Board from '../board/board.component'
import Info from '../info/info.component'
import './game.styles.scss'
import { Patterns } from '../../patterns'

const Game = () => {
 
    const [person, setPerson] = useState('Player1')
    const [board, setBoard] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState('X')
    const [result, setResult] = useState({ winner: 'none', state: 'none' })

    useEffect(()=>{
        setPerson(prompt('Укажите свое имя: '))
    },[]
    )

    useEffect(() => {
        checkWin()
        checkIfTie()
        player == 'O' ? setPlayer('X') : setPlayer('O')
    }, [board])

    useEffect(() => {
        if (result.state != 'none') {
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

    return (
        <div className='game-panel'>
            <Board board={board} playerTurn={playerTurn}/>
            <Info result={result} person={person}/>
        </div>
    )
}

export default Game