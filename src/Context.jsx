
import {createContext, useEffect, useState} from 'react'
export const MemoryContext=createContext();

export const Provider=({children})=>{
    const [data, setData] = useState(() => {
        const localData = localStorage.getItem("memory")
        return localData ? JSON.parse(localData) : []
    });
    const fetchData = async () => {
        try {
            const dataFetch = await fetch("https://rickandmortyapi.com/api/character/")
            const dataJson = await dataFetch.json()
            const results = dataJson.results.slice(0, 6)
             setData(results)

        } catch (error) {
            console.log('chyba pri nacteni dat:', error)
        }
    }
    useEffect(() => {

          if (data.length === 0) {
               fetchData();
           } else {
               localStorage.setItem("memory", JSON.stringify(data))
           }
    }, [])
    console.log(data)
    return(
        <MemoryContext.Provider value={{data,setData}}>
            {children}
        </MemoryContext.Provider>
    )
}