import Button from 'react-bootstrap/Button';

function FleeButton(props) {
  return (
    <>
      <Button onClick={props.handleFetchData} variant="danger" size="lg">Flee</Button>{' '}
    </>
  );
}

export default FleeButton;