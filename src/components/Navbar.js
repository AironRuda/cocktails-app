import { signOut } from "firebase/auth";
import { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Form, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <NavbarBs expand={false} className="mb-3 text-light bg-dark">
      <Container fluid>
        <NavbarBs.Toggle
          aria-controls={`offcanvasNavbarBs-expand-${false}`}
          className="bg-light"
        />
        <NavbarBs.Offcanvas
          aria-labelledby={`offcanvasNavbarBsLabel-expand-${false}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{currentUser.email}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link to="/" as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            <Button
              onClick={() => {
                signOut(auth);
              }}
            >
              logOut
            </Button>
          </Offcanvas.Body>
        </NavbarBs.Offcanvas>
        <NavbarBs.Text className="text-light">
          user: {currentUser.displayName}
        </NavbarBs.Text>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
