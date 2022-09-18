import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddTeamForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Team Name</Form.Label>
        <Form.Control type="text" placeholder="Team Name" />
        <Form.Text className="text-muted">
            Make it a good one, kid.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Trainer Name</Form.Label>
        <Form.Control type="password" placeholder="Trainer Name" />
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