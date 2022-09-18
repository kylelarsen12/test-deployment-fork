import Container from 'react-bootstrap/Container';
import Navigation from '../components/Navigation'
import TeamCard from '../components/TeamCard';
import WildPokemonCard from '../components/WildPokemonCard';
import Stack from 'react-bootstrap/Stack'


function Home(props){
    console.log(props)
    return(
        <div>
            <Container>
                <Stack gap={3}>
                    <Navigation/>
                    <WildPokemonCard 
                    data={props.data} 
                    handleFetchData={props.handleFetchData} 
                    setId={props.setId}
                    handleCatch={props.handleCatch}/>
                    <TeamCard/> 
                </Stack>

            </Container>
        </div>
    )
}
export default Home;