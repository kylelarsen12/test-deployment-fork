import CapturedCard from "../components/CapturedCard";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

function PokeDex(props) {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await props.getAllPokemon();
      const resData = await response.json();
      setPokeData(resData.results);
    };
    fetchPokemon();
  });

  const renderPokemon = pokeData.map((data, i) => {
    return <CapturedCard key={i} data={data} />;
  });

  return (
    <div>
      <Navigation />
      {renderPokemon}
    </div>
  );
}

export default PokeDex;

/*
function PokeDex(props) {
    const allPokemon = props.getAllPokemon();
    console.log(allPokemon);
    const display = allPokemon.map(() => {
      return (
        <CapturedCard data={props.data} getAllPokemon={props.getAllPokemon} />
      );
    });
    console.log(props);
    return (
      <div>
        <Navigation />
        {display}
      </div>
    );
  }
  */
