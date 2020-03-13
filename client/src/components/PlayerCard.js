import React from 'react';
export const PlayerCard = props => {
    return (
        <div className ='playerWrapper'>
            <h2>Name: {props.name}</h2>
            <p>Country: {props.country}</p>
            <p>Google searches:{' ' + props.searches}</p>
        </div>
    )
}