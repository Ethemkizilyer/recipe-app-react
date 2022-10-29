import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Nava = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink
            style={{ textDecoration: "none",fontSize:"2rem" }}
            className="text-light"
            to="/home"
          >
            BAKAR
          </NavLink>
          <div
            className="text-align-center d-flex gap-5 "
            style={{ textDecoration: "none" }}
          >
            <NavLink
              style={{ textDecoration: "none" }}
              className="text-light "
              to="/about"
            >
              ABOUT
            </NavLink>
            <a
              style={{ textDecoration: "none" }}
              className="text-light"
              href="https://github.com/Ethemkizilyer"
              target="_blank"
            >
              GITHUB
            </a>
            <NavLink
              style={{ textDecoration: "none" }}
              className="text-light"
              to="/"
            >
              LOGOUT
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nava;
