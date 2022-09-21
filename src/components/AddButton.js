import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

function AddButton() {
  const navigate = useNavigate()
  const handleAddToTeam = ()=>{
    navigate('/add_team')
  }
  return (
    <>
      <Button onClick={handleAddToTeam} variant="success" size="lg">Add to Team</Button>
    </>
  );
}

export default AddButton;