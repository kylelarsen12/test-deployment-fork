import TeamStatsCard from "../components/TeamStatsCard"
import Navigation from "../components/Navigation"
import EditButton from "../components/EditButton";
import AddButton from "../components/AddButton";
import RemoveButton from "../components/RemoveButton"
import Stack from 'react-bootstrap/Stack'

function TeamStats (props) {
    return(
        <div>
            <Navigation/>
            <TeamStatsCard />
            <Stack direction="horizontal" gap={3}>
                <AddButton handleCatch={props.handleCatch}/>
                <EditButton/>
                <RemoveButton/>
        </Stack>
        </div>
    )
}

export default TeamStats