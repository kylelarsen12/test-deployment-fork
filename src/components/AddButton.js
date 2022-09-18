import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

function AddButton() {
  const navigate = useNavigate()
  const handleAddTeamClick = ()=>{
    navigate('/add_team')
  }
  return (
    <>
      <Button onClick={handleAddTeamClick} variant="success" size="lg">Add Team</Button>
    </>
  );
}

export default AddButton;