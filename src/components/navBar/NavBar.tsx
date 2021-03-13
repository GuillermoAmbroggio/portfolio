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
  Menu,
  LeftMenu,
  LeftList,
  LeftListItem,
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
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const handleLanguage = () => {
    dispatch({ type: "SAG_TOGGLE_LANGUAGE" });
  };

  const handleMenu = (name?: "home" | "about" | "projects" | "contact") => {
    if (name) {
      setActive(name);
    }
    const body = document.body;
    if (activeMenu) {
      body.classList.remove("stop-scrolling");
    } else {
      body.classList.add("stop-scrolling");
    }
    setActiveMenu(!activeMenu);
  };

  return (
    <div>
      <LeftMenu activeMenu={activeMenu} modeTheme={modeTheme}>
        {activeMenu ? (
          <LeftList>
            <Link href="#home" onClick={() => handleMenu("home")}>
              <LeftListItem active={active === "home"}>
                <Icon name="fas fa-home" />
                <span className="textMenu">{texts.menuTop.home}</span>
              </LeftListItem>
            </Link>
            <Link href="#about" onClick={() => handleMenu("about")}>
              <LeftListItem active={active === "about"}>
                <Icon name="fas fa-user-alt" />
                <span className="textMenu">{texts.menuTop.about}</span>
              </LeftListItem>
            </Link>
            <Link href="#projects" onClick={() => handleMenu("projects")}>
              <LeftListItem active={active === "projects"}>
                <Icon name="fas fa-briefcase" />
                <span className="textMenu">{texts.menuTop.projects}</span>
              </LeftListItem>
            </Link>
            <Link href="#contact" onClick={() => handleMenu("contact")}>
              <LeftListItem active={active === "contact"}>
                <Icon name="fas fa-envelope" />
                <span className="textMenu"> {texts.menuTop.contact}</span>
              </LeftListItem>
            </Link>
          </LeftList>
        ) : null}
      </LeftMenu>

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

        <Menu onClick={() => handleMenu()} activeMenu={activeMenu}>
          {activeMenu ? (
            <Icon name="fas fa-times" size={30}></Icon>
          ) : (
            <Icon name="fas fa-bars" size={30}></Icon>
          )}
        </Menu>

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
    </div>
  );
};

export default NavBar;
