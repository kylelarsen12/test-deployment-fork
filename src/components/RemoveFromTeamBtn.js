import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function RemoveFromTeamBtn(props) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    window.alert(`${props.data.name} was removed from your team D:`);
    navigate("/team_stats");
  };
  const handleClick = () => {
    const id = props.data._id;
    props.handleRemoveFromTeam(id).then(() => {
      handleSubmit();
      //window.location.reload(false);
    });
    console.log(props.data);
  };
  return (
    <>
      <Button onClick={handleClick} variant="danger" size="lg">
        Remove from Team
      </Button>
    </>
  );
}

export default RemoveFromTeamBtn;
