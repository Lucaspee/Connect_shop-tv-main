import styles from "./Navbar.module.css";
import Button from "../UI/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" w={100}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            className={styles.logo}
            src={require("../../images/logo/logo (1).png")}
          />
          <span className={styles.brandName}>Connect Shop TV</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button classNameOne="button" classNameTwo="light" text="Preços" to="#pricing"/>
            <Button
              classNameOne="button"
              classNameTwo="light"
              text="Contate-nos"
              to="#support"
            />
            <Button
              classNameOne="button"
              classNameTwo="heavy"
              text="Iniciar"
              to="https://api.whatsapp.com/send?phone=5548996641498&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20realizar%20um%20teste%20dos%20canais,%20por%20favor."
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
