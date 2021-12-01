import React, {useEffect} from 'react'

const Card = props => {
    useEffect(() => {
        return () => {
        }
    }, [])
    return (
        <div onClick={() => props.onCardsClicked(props.card)}>
            <div>
                <h3>{props.card.picture}</h3>
            </div>
            <div>
                <h3>{props.card.title}</h3>
            </div>
        </div>
    )
}

export default Card;