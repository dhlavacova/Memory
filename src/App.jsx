import { useState,useEffect} from 'react'
import './App.css'
import Memory from './components/Memory.jsx'
function App() {
    const[data,setData]=useState(()=>{
        const localData=localStorage.getItem("memory")
        return localData?JSON.parse(localData):[]
    });
  const  fetchData=async()=>{
        try {
            const dataFetch = await fetch("https://rickandmortyapi.com/api/character/")
            const dataJson = await dataFetch.json()
            const results = dataJson.results.slice(0,6)
            setData(results)
            console.log(results)
        }
        catch (error){
            console.log('chyba pri nacteni dat:',error)
        }
    }
    useEffect(()=>{

         if(data.length===0) {
             fetchData();
         }
else {
             localStorage.setItem("memory", JSON.stringify(data))
         }
    },[])

       return (
    <>
        <h1>Memory</h1>

       <Memory data={data}/>

    </>
  )
}

export default App
