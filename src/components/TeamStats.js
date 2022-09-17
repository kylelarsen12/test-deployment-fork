import TeamStatsCard from "./TeamStatsCard"
import Navigation from "./Navigation"
import EditButton from "./EditButton";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton"
import Stack from 'react-bootstrap/Stack'

function TeamStats () {
    return(
        <div>
            <Navigation/>
            <TeamStatsCard/>
            <Stack direction="horizontal" gap={3}>
                <AddButton/>
                <EditButton/>
                <RemoveButton/>
        </Stack>
        </div>
    )
}

export default TeamStats