import React from "react";
import { NavBar } from "./components";
import LoadingPage from "./components/utils/loadingPage/LoadingPage";
import useStore from "./hooks/useStore";
import { Text, Title, SubTitle } from "./components/atoms/text/Text";
import useTheme from "./hooks/useTheme";
import Icon from "./components/atoms/icon/Icon";

const App: React.FC = () => {
  const { isLoading } = useStore();
  const theme = useTheme();

  return (
    <div>
      {isLoading ? <LoadingPage /> : null}
      <NavBar />
      My Reactttasdasfjsdkf
      <h1>TITULO</h1>
      <Text style={{ backgroundColor: theme.palette.primary }}>Regular</Text>
      <Title>Title</Title>
      <SubTitle>Sub Title</SubTitle>
      <p style={{ background: "blue", color: "green", fontSize: "150px" }}>
        <span className="fab fa-instagram" style={{ color: "red" }} />
      </p>
      <Icon name="fab fa-instagram" style={{ fontSize: 66 }} />
    </div>
  );
};

export default App;
