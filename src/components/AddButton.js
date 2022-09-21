import Button from "react-bootstrap/Button";

function AddButton(props) {
  const id = props.data._id;
  const handleClick = () => {
    props.handleAddToTeam(id);
    console.log(props.data);
  };
  return (
    <>
      <Button onClick={handleClick} variant="success" size="lg">
        Add to Team
      </Button>
    </>
  );
}

export default AddButton;
