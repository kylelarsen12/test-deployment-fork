import Button from 'react-bootstrap/Button';

function CatchButton(props) {
  

  function handleClick(){
    props.handleCatch(props.data.id)
  }

  return (
    <>
      <Button onClick={handleClick} variant="success" size="lg">PokeBall</Button>
    </>
  );
}

export default CatchButton;