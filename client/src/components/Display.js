export const PlayerCard = props => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Country: {props.country}</p>
            <p>Google searches:{props.searches}</p>
        </div>
    )
}