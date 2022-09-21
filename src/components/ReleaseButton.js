import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

function ReleaseButton() {
  // const navigate = useNavigate()
  // const handleReleasePokemon = ()=>{
  //   navigate('/storage')

  return (
    <>
      <Button  variant="danger" size="lg">Release</Button>
    </>
  );
}

export default ReleaseButton;