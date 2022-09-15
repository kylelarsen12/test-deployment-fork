import Container from 'react-bootstrap/Container';
import Navigation from './Navigation'
import TeamCard from './TeamCard';
import WildPokemonCard from './WildPokemonCard';
import Stack from 'react-bootstrap/Stack'

function Home(){
    return(
        <div>
            
            <Container>
                <Stack gap={3}>
                    <Navigation/>
                    <TeamCard/>
                    <WildPokemonCard/>
                </Stack>
            </Container>
        </div>
    )
}
export default Home;