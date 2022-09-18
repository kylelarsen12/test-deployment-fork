import Button from 'react-bootstrap/Button';

function FleeButton(props) {
  const handleClick= ()=>{
    let randId = Math.floor(Math.random()*150)
    props.setId(randId)
    props.handleFetchData()
  }
  return (
    <>
      <Button onClick={handleClick} variant="danger" size="lg">Flee</Button>{' '}
    </>
  );
}

export default FleeButton;