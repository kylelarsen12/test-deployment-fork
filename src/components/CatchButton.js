import { useState } from 'react'
import Button from 'react-bootstrap/Button';

function CatchButton() {
  const [ userID, setUserId ] = useState(0)

  function handlePokeBall(e){
    e.preventDefault()
  }
  return (
    <>
      <Button onClick={handlePokeBall} variant="success" size="lg">PokeBall</Button>
    </>
  );
}

export default CatchButton;