import './App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import CatchButton from './components/CatchButton'
// import ChangeColorButton from './components/ChangeColorButton'
import FleeButton from './components/FleeButton'
// import RemoveButton from './components/RemoveButton'
import TeamCard from './components/TeamCard'
import WildPokemonCard from './components/WildPokemonCard'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
        <Container>
            <Stack gap={3}>
            <TeamCard/>
            <WildPokemonCard/>
            </Stack> 
        </Container>
    <ButtonGroup>
      <FleeButton />
      <CatchButton />
    </ButtonGroup>

      {/* <RemoveButton />
      <ChangeColorButton /> */}
    </div>
  );
}

export default App;