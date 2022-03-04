import react from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  const handleLogin = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/login");
  };
  const handleEnquiry = () => {
    history.push("/enquiry");
  };

  const token = window.localStorage.getItem("jwtToken");

  return (
    <div className="text-center">
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <img
            className="navbar-logo"
            src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png"
            alt="logo"
          />
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="" onClick={handleHome}>
              Home
            </Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="" onClick={handleEnquiry}>
              Enquiry
            </Nav.Link>
          </Nav>
          <div className="dropdown mx-5">
            <div
              className="user-container"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="user-icon"
                src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
              />
            </div>
            <ul
              className="dropdown-menu custom-dropdown"
              aria-labelledby="dropdownMenuButton1"
            >
              {token ? (
                ""
              ) : (
                <li>
                  <a className="dropdown-item" href="#" onClick={handleLogin}>
                    Log In
                  </a>
                </li>
              )}
              {token ? (
                ""
              ) : (
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleRegister}
                  >
                    Register
                  </a>
                </li>
              )}
              {token && (
                <li>
                  <a className="dropdown-item" href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
