import React from "react";
import { Container } from "./navbar.style";
import "./navbar.css";
const NavBar: React.FC = ({}) => {
  return (
    <Container>
      <div className="asd">
        <ul>
          <li>Homee</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </Container>
  );
};

export default NavBar;
