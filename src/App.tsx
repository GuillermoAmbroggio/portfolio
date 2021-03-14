import React from "react";
import { NavBar } from "./components";
import LoadingPage from "./components/utils/loadingPage/LoadingPage";
import useStore from "./hooks/useStore";
import { Text, Title, SubTitle } from "./components/atoms/text/Text";
import useTheme from "./hooks/useTheme";
import Icon from "./components/atoms/icon/Icon";
import ProgressBar from "./components/atoms/progressBar/ProgressBar";
import Home from "./components/sections/home/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import useDispatch from "./hooks/useDispatch";
import About from "./components/sections/about/About";

AOS.init({
  duration: 1500,
  easing: "ease-in-out",
  mirror: true,
  once: false,
  offset: 200,
  anchorPlacement: "top-bottom",
});

const App: React.FC = () => {
  const { isLoading } = useStore();
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <div>
      {isLoading ? <LoadingPage /> : null}
      <NavBar />
      <Home />
      <About />

      <div data-aos="fade-up">
        My Reactttasdasfjsdkf
        <h1>TITULO</h1>
        <Text style={{ backgroundColor: theme.palette.primary }}>Regular</Text>
        <Title>Title</Title>
        <SubTitle>Sub Title</SubTitle>
        <ProgressBar status="50%" />
        <p style={{ background: "blue", color: "green", fontSize: "150px" }}>
          <span className="fab fa-instagram" style={{ color: "red" }} />
        </p>
        <Icon name="fab fa-instagram" style={{ fontSize: 66 }} />
        <p>asdasdds</p>
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          change Theme
        </button>
        <button onClick={() => dispatch({ type: "SAG_ES_LANGUAGE" })}>
          change Language Spanish
        </button>
        <button onClick={() => dispatch({ type: "SAG_EN_LANGUAGE" })}>
          change Language English
        </button>
      </div>
      <div
        data-aos="fade-up"
        style={{
          height: "110vh",
          backgroundColor: "green",

          paddingTop: 65,
        }}
      >
        <div style={{ background: "orange", height: "100%" }}></div>
      </div>
      <div
        id="projects"
        data-aos="fade-up"
        style={{ height: "100vh", backgroundColor: "red" }}
      ></div>
      <div
        id="contact"
        data-aos="fade-up"
        style={{ height: "100vh", backgroundColor: "blue" }}
      ></div>
    </div>
  );
};

export default App;
