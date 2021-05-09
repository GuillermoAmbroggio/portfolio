import React from "react";
import { Title, Text, SubTitle } from "../../atoms/text/Text";
import {
  ContainerAbout,
  Row,
  ImgProfile,
  Column,
  AnchorAbout,
} from "./about.style";
import Writing from "../../../copywriting/Writing";
import profileImg from "../../../assets/about/profile.png";
import AboutInfo from "../../molecules/aboutInfo/AboutInfo";
import Skills from "../../organisms/skills/Skills";
import Resume from "../../organisms/resume/Resume";

const About: React.FC = () => {
  const texts = Writing();

  return (
    <>
      <AnchorAbout id="about" />
      <ContainerAbout data-aos="fade-up">
        <Title>{texts.about.title}</Title>
        <Text style={{ textAlign: "center", margin: "40px 0px" }}>
          {texts.about.intro}
        </Text>
        <Row>
          <ImgProfile src={profileImg} />
          <Column style={{ margin: 20 }}>
            <SubTitle>{texts.about.subtitle}</SubTitle>
            <Row style={{ marginTop: 20 }}>
              <Column>
                <ul>
                  <li>
                    <AboutInfo
                      title={texts.about.birthdayTitle}
                      text={texts.about.birthday}
                    />
                  </li>
                  <li>
                    <AboutInfo
                      title={texts.about.cityTitle}
                      text={texts.about.city}
                    />
                  </li>
                  <li>
                    <AboutInfo
                      title={texts.about.emailTitle}
                      text={texts.about.email}
                    />
                  </li>
                </ul>
              </Column>
              <Column>
                <ul>
                  <li>
                    <AboutInfo
                      title={texts.about.ageTitle}
                      text={texts.about.age}
                    />
                  </li>
                  <li>
                    <AboutInfo
                      title={texts.about.educationTitle}
                      text={texts.about.education}
                    />
                  </li>
                </ul>
              </Column>
            </Row>
            <Text>{texts.about.personalInfo}</Text>
          </Column>
        </Row>
      </ContainerAbout>
      <Skills />
      <Resume />
    </>
  );
};

export default About;
