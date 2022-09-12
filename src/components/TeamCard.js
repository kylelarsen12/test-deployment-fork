import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function TeamCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" alt='Trainer Img'/>
      <Card.Body>
        <Card.Title>Trainer Name</Card.Title>
        <Card.Text>
          Team Name
        </Card.Text>
        <ButtonGroup>
          <Button variant="primary">Remove</Button>
          <Button variant="secondary">Modify</Button>
        </ButtonGroup>
        
      </Card.Body>
    </Card>
  );
}

export default TeamCard;