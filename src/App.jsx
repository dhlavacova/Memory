import { useState,useEffect} from 'react'
import './App.css'
import Memory from './components/Memory.jsx'
function App() {
  const  collApi=async()=>{
      const data=await fetch("https://rickandmortyapi.com/api/character/")
      const dataJson=await data.json()
      console.log(JSON.stringify(dataJson))
    }
    useEffect(()=>{
        if(local.sto){}
            collApi()})
//collApi()
  return (
    <>

      <Memory/>

    </>
  )
}

export default App
