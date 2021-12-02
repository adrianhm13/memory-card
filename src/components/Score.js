import React from 'react'

const Score = props => {
    const {currentScore, bestScore} = props

    return (
        <div>
            <h1>{currentScore}</h1>
            <h1>{bestScore}</h1>
        </div>
    )
}

export default React.memo(Score)
