import Card from "react-bootstrap/Card"

import Stack from "react-bootstrap/Stack";
import CardGroup from "react-bootstrap/CardGroup";


function TeamStatsCard () {
  return (
    <div>
    <CardGroup>
      <Card className='text-center mx-auto' style={{ width: 'auto' }} border='primary'>
        <Stack gap={2}>
          <Card.Body>
            <Stack direction='horizontal' gap={3}>
                <Card border="light">
                    <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1278636039/HGSS_Youngster_400x400.png" alt='youngster Joey' style={{ width: '10rem'}}/>
                </Card>
                <Card border="light">
                    <Card.Title>Team Name</Card.Title>
                    <Card.Text>Squad Type</Card.Text> 
                </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
            </Stack>
          </Card.Body>
        </Stack>
        
      </Card>
    </CardGroup>
    </div>
  );
}

export default TeamStatsCard