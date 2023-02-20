import { signOut } from "firebase/auth";
import { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
  Offcanvas,
} from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
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
              {currentUser && (
                <Offcanvas.Title>{currentUser.email}</Offcanvas.Title>
              )}
            </Offcanvas.Header>
            <Offcanvas.Body>
              {currentUser && (
                <div>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link to="/" as={NavLink}>
                      Home
                    </Nav.Link>
                    <Nav.Link to="sales" as={NavLink}>
                      Sales
                    </Nav.Link>
                    {currentUser.displayName === "admin" && (
                      <Nav.Link to="dayliMenu" as={NavLink}>
                        Agregar al menú del dia
                      </Nav.Link>
                    )}
                  </Nav>
                  <Button
                    onClick={() => {
                      signOut(auth);
                    }}
                  >
                    logOut
                  </Button>
                </div>
              )}
            </Offcanvas.Body>
          </NavbarBs.Offcanvas>
          {currentUser && (
            <NavbarBs.Text className="text-light">
              user: {currentUser.displayName}
            </NavbarBs.Text>
          )}
        </Container>
      </NavbarBs>
      <Outlet />
    </div>
  );
};

export default Navbar;
