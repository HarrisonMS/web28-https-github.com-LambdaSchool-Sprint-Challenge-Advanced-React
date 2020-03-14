import React from 'react';
// import {CountryCard} from './CountryCard';
import { PlayerCard }from './PlayerCard';
import { useDarkMode } from '../hooks/useDarkMode';
import { useLocalData } from '../hooks/useData';
import { GroupByCountry } from './GroupByCountry';

export const Display = props => {
    const [darkMode, setDarkMode] = useDarkMode();
    const [localData, setLocalData] = useLocalData()
    
    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }
    const toggleGroup = e =>{
        e.preventDefault();
        const idk = GroupByCountry(props.playerData)
        setLocalData(idk)
    }
    const clearLocalData = (e) => {
        e.preventDefault();
        localStorage.clear()
    }
    return (
       <div>
            {localData? 
             <>
             <button className='button' onClick={toggleDarkMode}> {darkMode ? "go light" : "go dark"}</button>
             <button className='button'onClick={toggleGroup}>Sort</button>
             <div className= 'playersWrapper'>
                 {props.playerData.map((player) => {
                     return( 
                         <>
                     <PlayerCard
                     key={player.id}
                     name={player.name}
                     country={player.country}
                     searches={player.searches}
                     />
                     </>
                     ) 
                 })}
             </div>
         </>
            : 
            <>
                <button className='button' onClick={toggleDarkMode}> {darkMode ? "go light" : "go dark"}</button>
                <button className='button' onClick={toggleGroup}>Group</button>
                <button className='button' onClick={clearLocalData}>JK</button>
                <h1>heyy look at you your almost there</h1> 
            </>
            
           
        }</div>)
        
}