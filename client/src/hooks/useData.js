import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useLocalData = () => {
    const [localData, setLocalData] = useLocalStorage("localData", {});
    useEffect(() => {
        localData ? 
        document.body.classList.remove("playersWrapper") && 
        document.body.classList.add('groupedByCountry') : 
        document.body.classList.add("playersWrapper") && 
        document.body.classList.remove('groupedByCountry')
    },[localData])
    return [localData, setLocalData]
}