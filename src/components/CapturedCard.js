import ReleaseButton from "./ReleaseButton";
import AddButton from "./AddButton";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Stack from "react-bootstrap/Stack";

function CapturedCard(props) {
  return (
    <Card
      className="text-center mx-auto"
      border="primary"
      style={{ width: "30rem" }}
    >
      <Card.Img
        variant="top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`}
        alt={`stored pokemon img ${props.data.id}`}
        style={{ width: "30rem" }}
      />
      <Card.Title>{props.data.name}</Card.Title>
      <Card.Body>
        <ButtonGroup>
          <Stack gap={3} direction="horizontal">
            <ReleaseButton
              handleReleasePokemon={props.handleReleasePokemon}
              data={props.data}
              setId={props.setId}
            />
            <AddButton handleCatch={props.handleCatch} />
          </Stack>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default CapturedCard;
