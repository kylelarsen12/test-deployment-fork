
import Card from 'react-bootstrap/Card';

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
          <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1278636039/HGSS_Youngster_400x400.png" alt='youngster Joey' style={{ width: '3.5rem'}}/>
          <Card.Title>Youngster Joey</Card.Title>
          <Card.Text>Squad</Card.Text>
        </Card.Body>
      </Stack>

    </Card>
  );
}

export default TeamCard;