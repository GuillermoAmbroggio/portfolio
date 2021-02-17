import React from "react";
import { Container } from "./navbar.style";
import "./navbar.css";
import useDispatch from "../../hooks/useDispatch";
import Writing from "../../copywriting/Writing";

const NavBar: React.FC = ({}) => {
  const dispatch = useDispatch();
  const texts = Writing();
  return (
    <Container>
      <div className="asd">
        <ul>
          <li>{texts.menuTop.home}</li>
          <li>{texts.menuTop.about}</li>
          <li>{texts.menuTop.projects}</li>
          <li>{texts.menuTop.contact}</li>
        </ul>
      </div>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        change Theme
      </button>
      <button onClick={() => dispatch({ type: "SAG_ES_LANGUAGE" })}>
        change Language Spanish
      </button>
      <button onClick={() => dispatch({ type: "SAG_EN_LANGUAGE" })}>
        change Language English
      </button>
    </Container>
  );
};

export default NavBar;
