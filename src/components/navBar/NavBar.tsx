import React, { useState } from "react";
import {
  ContainerNavBar,
  List,
  ListItem,
  Link,
  Toggle,
  Flags,
  Arg,
  Usa,
} from "./navbar.style";
import "./navbar.css";
import Writing from "../../copywriting/Writing";
import Icon from "../atoms/icon/Icon";
import useStore from "../../hooks/useStore";
import useDispatch from "../../hooks/useDispatch";

const NavBar: React.FC = ({}) => {
  const texts = Writing();
  const [active, setActive] = useState<
    "home" | "about" | "projects" | "contact"
  >("home");
  const { modeTheme, language } = useStore();
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const handleLanguage = () => {
    dispatch({ type: "SAG_TOGGLE_LANGUAGE" });
  };

  return (
    <ContainerNavBar>
      <Flags onClick={() => handleLanguage()}>
        <Arg language={language} />
        <Usa language={language} />
      </Flags>

      <Toggle modeTheme={modeTheme}>
        <input type="checkbox" />
        <Icon name="fas fa-sun" size={25} />
        <Icon name="fas fa-moon" size={25} />
        <button onClick={() => handleToggle()}></button>
      </Toggle>

      <List>
        <Link href="#home" onClick={() => setActive("home")}>
          <ListItem active={active === "home"}>
            <Icon name="fas fa-home" />
            <span className="textMenu">{texts.menuTop.home}</span>
          </ListItem>
        </Link>
        <Link href="#about" onClick={() => setActive("about")}>
          <ListItem active={active === "about"}>
            <Icon name="fas fa-user-alt" />
            <span className="textMenu">{texts.menuTop.about}</span>
          </ListItem>
        </Link>
        <Link href="#projects" onClick={() => setActive("projects")}>
          <ListItem active={active === "projects"}>
            <Icon name="fas fa-briefcase" />
            <span className="textMenu">{texts.menuTop.projects}</span>
          </ListItem>
        </Link>
        <Link href="#contact" onClick={() => setActive("contact")}>
          <ListItem active={active === "contact"}>
            <Icon name="fas fa-envelope" />
            <span className="textMenu"> {texts.menuTop.contact}</span>
          </ListItem>
        </Link>
      </List>
    </ContainerNavBar>
  );
};

export default NavBar;
