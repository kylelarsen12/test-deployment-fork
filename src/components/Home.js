import Navigation from './Navigation'
import TeamCard from './TeamCard';
import WildPokemonCard from './WildPokemonCard';


function Home(){
    return(
        <div>
            <Navigation/>
            <TeamCard/>
            <WildPokemonCard/>
        </div>
    )
}
export default Home;