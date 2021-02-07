import React from "react";
import { Container } from "./navbar.style";
import "./navbar.css";
import useDispatch from "../../hooks/useDispatch";

const NavBar: React.FC = ({}) => {
  const dispatch = useDispatch();
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
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        change Theme
      </button>
    </Container>
  );
};

export default NavBar;
