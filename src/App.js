import './App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import CatchButton from './components/CatchButton'
import ChangeColorButton from './components/ChangeColorButton'
import FleeButton from './components/FleeButton'
import RemoveButton from './components/RemoveButton'

function App() {
  return (
    <div className="App">
    <ButtonGroup>
      <FleeButton />
      <CatchButton />
    </ButtonGroup>

      <RemoveButton />
      <ChangeColorButton />
    </div>
  );
}

export default App;
