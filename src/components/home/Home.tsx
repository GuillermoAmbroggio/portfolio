import React from "react";
import "./home.css";
import { HeroTitle, SubTitleHero } from "../atoms/text/Text";
import TypeWriter from "../molecules/typeWriter/TypeWriter";
import Writing from "../../copywriting/Writing";
import { ContainerHome } from "./home.style";

const Home: React.FC = () => {
  const texts = Writing();

  return (
    <ContainerHome>
      <div className="contText" data-aos="zoom-in" data-aos-delay="100">
        <HeroTitle>Guillermo Ambroggio</HeroTitle>
        <div className="heroSubtitle">
          <SubTitleHero>{texts.hero.my}</SubTitleHero>

          <TypeWriter strings={[texts.hero.title1, texts.hero.title2]} />
        </div>
      </div>
    </ContainerHome>
  );
};

export default Home;
