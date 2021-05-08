import React from "react";
import { NavBar } from "./components";
import LoadingPage from "./components/utils/loadingPage/LoadingPage";
import useStore from "./hooks/useStore";
import Home from "./components/sections/home/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Contact from "./components/sections/contact/Contact";

AOS.init({
  duration: 1500,
  easing: "ease-in-out",
  mirror: false,
  once: true,
  offset: 200,
});

const App: React.FC = () => {
  const { isLoading } = useStore();

  return (
    <div>
      {isLoading ? <LoadingPage /> : null}
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
