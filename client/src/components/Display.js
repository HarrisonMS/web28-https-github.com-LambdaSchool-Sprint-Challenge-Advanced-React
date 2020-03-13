import PlayerCard from './PlayerCard';

export const Display = props => {
    return (
        <div>
            {props.playerData.map((player) => {
                return <PlayerCard
                key={player.id}
                name={player.name}
                country={player.country}
                searches={player.searches}
                />
            })}
        </div>
    )
}