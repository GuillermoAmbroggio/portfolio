import React, { useState } from "react";
import { ContainerNavBar, List, ListItem, Link, Toggle } from "./navbar.style";
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
  const { modeTheme } = useStore();
  const dispatch = useDispatch();
  console.log("navbar 16", modeTheme);
  const handleClick = () => {
    console.log("etrno acaa");
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ContainerNavBar>
      <div
        style={{
          width: "100%",
        }}
      >
        <Toggle modeTheme={modeTheme}>
          <input type="checkbox" />
          <Icon name="fas fa-sun" size={25} />
          <Icon name="fas fa-moon" size={25} />
          <button onClick={() => handleClick()}></button>
        </Toggle>
      </div>
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
