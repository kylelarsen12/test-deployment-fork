import { Container } from "react-bootstrap";
import AddTeamForm from "../components/AddTeamForm";
import Navigation from "../components/Navigation";

function AddTeam(){
    return(
        <Container>
            <Navigation/>
            <AddTeamForm/>
        </Container>
        
    )
}

export default AddTeam;