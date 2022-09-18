import Button from 'react-bootstrap/Button';

function AddButton(props) {
  return (
    <>
      <Button onClick={props.handleAddTeamClick} variant="success" size="lg">Add Team</Button>
    </>
  );
}

export default AddButton;