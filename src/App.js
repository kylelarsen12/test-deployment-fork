
//import TeamStats from "./components/TeamStats";
import Home from './components/Home'
import React, { useState } from 'react'


function App() {

  const [ data, setData ] = useState('')
  const [ id, setId ] = useState(1)
 
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${id}`
  
  
  //const endpoint = 'ditto'

const handleFetchData=()=>{
 async function fetchData (url) {
    try{
      const response = await fetch (url)// link to backend localhost:5050 yuh
      //    .../team   .../storedpokemon
      const data = await response.json()    
      setData(data)
      console.log(url)
      return data
    }catch(err){
      console.error("FUCK")
    }
    
  }
  fetchData(apiURL)
  console.log(apiURL)
}
 

  return (
    <div>
    <Home data={data} handleFetchData={handleFetchData} setId={setId}/>
    </div>
  );
}

export default App;




