import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            height="auto"
            width="150"
            alt="pokemon logo"
          />
          Gotta Catch 'em All!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Stack direction="horizontal" gap={3}>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Stats" id="basic-nav-dropdown">
                <NavDropdown.Item href="/storage">
                  Storage Page
                </NavDropdown.Item>
                <NavDropdown.Item href="/team_stats">
                  Team Stats
                </NavDropdown.Item>
              </NavDropdown>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
