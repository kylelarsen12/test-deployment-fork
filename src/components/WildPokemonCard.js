import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


function WildPokemonCard() {
  return (
    <Card className='text-center mx-auto' style={{ width: '40rem'}}>
      <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt='Wild Poke Img'/>
      <Card.Body>
        <Card.Title>Wild Pokemon Name</Card.Title>
        <ButtonGroup>
          <Button variant="primary">FLEE</Button>
          <Button variant="secondary">PokeBall</Button>
        </ButtonGroup>
        
      </Card.Body>
    </Card>
  );
}

export default WildPokemonCard;