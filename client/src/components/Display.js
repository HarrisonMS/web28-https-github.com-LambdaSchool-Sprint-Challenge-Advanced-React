import React from 'react';
import { PlayerCard }from './PlayerCard';
import { useDarkMode } from '../hooks/useDarkMode';

export const Display = props => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }
    return (
        <>
        <button className='darkModeToggle' onClick={toggleDarkMode}> {darkMode ? "go light" : "go dark"}</button>
        <div className= 'playerWrapper'>
            {props.playerData.map((player) => {
                return <PlayerCard
                key={player.id}
                name={player.name}
                country={player.country}
                searches={player.searches}
                />
            })}
        </div>
        </>
    )
}