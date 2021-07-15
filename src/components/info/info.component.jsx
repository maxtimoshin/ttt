import React, { useEffect, useState } from 'react'
import './info.styles.scss'

const Info = ({ result, person }) => {
    const [firstPlayerScore, setScoreFirst] = useState(0)
    const [secondPlayerScore, setScoreSecond] = useState(0)
    const [tie, setTie] = useState(0)

    useEffect(() => {
    if (result.winner == 'X') {setScoreFirst(firstPlayerScore + 1)}
    if (result.winner == 'O') {setScoreSecond(secondPlayerScore + 1)}
    if (result.state == 'Ничья') {setTie(tie + 1)}
    },[result]
    )
    
    return (
        <div className='info'>
            <span>Score</span>
            <span>{person}: {firstPlayerScore}</span>
            <span>Player2: {secondPlayerScore}</span>
            <span>Ничья: {tie}</span>
        </div>
    )
}

export default Info