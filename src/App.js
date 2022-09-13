
import TeamCard from './components/TeamCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import WildPokemonCard from './components/WildPokemonCard';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'


function App() {
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <TeamCard/>
      <WildPokemonCard/>
          </Stack> 
        
      </Container>
      
    </div>
    
  );
}

export default App;
