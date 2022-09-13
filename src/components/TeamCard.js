import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Stack from 'react-bootstrap/Stack'

//requires passing TeamCard array of pokemon
//map the array and return a card with a picture of each pokemon

function TeamCard() {
  return (
    <Card className='text-center mx-auto' style={{ width: 'auto' }}>
      <Stack gap={2}>
        <Card.Body>
          <Stack direction='horizontal' gap={3}>
            <Card.Img variant="top" src="Team pic" alt='Team Img'/>
            <Card.Img variant="top" src="Team pic" alt='Team Img'/>
            <Card.Img variant="top" src="Team pic" alt='Team Img'/>
            <Card.Img variant="top" src="Team pic" alt='Team Img'/>
            <Card.Img variant="top" src="Team pic" alt='Team Img'/>
            <Card.Img variant="top" src="Team pic" alt='Team Img'/>
          </Stack>
        </Card.Body>
        <Card.Body>
          <Card.Title>Youngster Joey</Card.Title>
          <Card.Text>Squad</Card.Text>
          <ButtonGroup>
            <Button variant="primary">Modify</Button>
          </ButtonGroup>
        </Card.Body>
      </Stack>
      
    </Card>
  );
}

export default TeamCard;