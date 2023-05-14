import { useState,useEffect} from 'react'
import './App.css'
import Memory from './components/Memory.jsx'
function App() {
    const[data,setData]=useState([]);
  const  fetchData=async()=>{
        try {
            const data = await fetch("https://rickandmortyapi.com/api/character/")
            const dataJson = await data.json()
            const results = dataJson.results
            setData(results)
        }
        catch (error){
            console.log('chyba pri nacteni dat:',error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])


  return (
    <>
        <h1>Memory</h1>
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      <Memory/>

    </>
  )
}

export default App
