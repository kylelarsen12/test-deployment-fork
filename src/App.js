
//import TeamStats from "./components/TeamStats";
import Home from './components/Home'
import React, { useState } from 'react'


function App() {

  const [ data, setData ] = useState('')
 
  const apiURL = 'https://pokeapi.co/api/v2/pokemon/ditto' 
  
  //const endpoint = 'ditto'

const handleFetchData=()=>{
 async function fetchData (url) {
    try{
      const response = await fetch (url)// link to backend localhost:5050 yuh
      //    .../team   .../storedpokemon
      const data = await response.json()    
      setData(data)
      return data
    }catch(err){
      console.error("FUCK")
    }
    
  }
  fetchData(apiURL)
  console.log(data)
}
 

  return (
    <div>
    <Home data={data} handleFetchData={handleFetchData}/>
    </div>
  );
}

export default App;




