import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

function AddTeamForm() {
 const navigate = useNavigate()

 const handleSubmit = event => {
  event.preventDefault();
  navigate('/team_stats')
 }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Team Name</Form.Label>
        <Form.Control type="text" placeholder="Team Name" />
        <Form.Text className="text-muted">
            Make it a good one, kid.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Trainer Name</Form.Label>
        <Form.Control type="text" placeholder="Trainer Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Default Team" />
      </Form.Group>
      <Button variant="success" type="submit">
        Add Team
      </Button>
    </Form>
  );
}

export default AddTeamForm;