import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function WildPokemonCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" alt='Wild Poke Img'/>
      <Card.Body>
        <Card.Title>Wild Pokemon Name</Card.Title>
        <Card.Text>
          Team Name
        </Card.Text>
        <ButtonGroup>
          <Button variant="primary">FLEE</Button>
          <Button variant="secondary">PokeBall</Button>
        </ButtonGroup>
        
      </Card.Body>
    </Card>
  );
}

export default WildPokemonCard;