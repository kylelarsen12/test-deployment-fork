
//import TeamStats from "./components/TeamStats";

import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import TeamStatsCard from './components/TeamStatsCard'
import AddTeam from './pages/AddTeam'
import Home from './pages/Home'
import TeamStats from './pages/TeamStats'


function App() {
  const [ data, setData ] = useState('')
  const [ id, setId ] = useState(Math.floor(Math.random()*150))
  const [ caught, setCaught ] = useState()
 
  const apiURL = `https://pokeapi.co/api/v2/pokemon/` + id
 
  
  //const endpoint = 'ditto'

useEffect(()=>{
  fetchData(apiURL)
},[])

 async function fetchData  (url) {
    try{
      const response = await fetch (url)// link to backend localhost:5050 yuh
      //    .../team   .../storedpokemon
      const data = await response.json()    
      setData(data)
      console.log(url)
      return data
    }catch(err){
      console.error("FUCKED")
    }
  }
 
function handleFetchData(){
  fetchData(apiURL)
}


function handleCatch(){
  setCaught(data.id)
  return(
    <TeamStatsCard/>
  )
}


  return (
    <div>
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Home data={data} handleFetchData={handleFetchData} setId={setId} handleCatch={handleCatch}/>}/>
  <Route path="/team_stats" element={<TeamStats handleCatch={handleCatch}/>}/>
  <Route path='/add_team' element={<AddTeam/>}/>
</Routes>
</BrowserRouter>
    
    {/* <TeamCard/> */}
    </div>
  );
}




export default App;




