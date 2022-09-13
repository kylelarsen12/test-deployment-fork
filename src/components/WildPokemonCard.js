import Card from 'react-bootstrap/Card';

function WildPokemonCard() {
  return (
    <Card className='text-center mx-auto' style={{ width: '30rem'}}>
      <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt='Wild Poke Img'/>
      <Card.Body>
        <Card.Title>Wild Pokemon Name</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default WildPokemonCard;