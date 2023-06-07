import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import '../bootstrap.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <Navbar className="py-4" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"> Beauty Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
    
              <Nav.Link as={Link} to="/procedure"> Services </Nav.Link>
              <Nav.Link as={Link} to="/appointment"> Appointment </Nav.Link>
            </Nav>
            {user ? (
              <div className="d-flex align-items-center">
                <Nav.Link disabled>Welcome,<br></br> {user.name}</Nav.Link>
                <Button variant="outline-light" onClick={handleLogOut}>
                  Log Out
                </Button>
              </div>
            ) : (
              <>
                  <Nav.Link as={Link} to="/auth"> Log In </Nav.Link><br></br> 
                  <Nav.Link as={Link} to="/auth"> Sign Up </Nav.Link>
                </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
