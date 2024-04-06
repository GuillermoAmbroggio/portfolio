import React from 'react';
import { Title, Text, SubTitle } from '../../atoms/text/Text';
import {
  ContainerAbout,
  Row,
  ImgProfile,
  Column,
  AnchorAbout,
  ColumnContainer,
  TextCenter,
} from './about.style';
import Writing from '../../../copywriting/Writing';
import profileImg from '../../../assets/about/profile.png';
import AboutInfo from '../../molecules/aboutInfo/AboutInfo';
import Skills from '../../organisms/skills/Skills';
import Resume from '../../organisms/resume/Resume';

const About: React.FC = () => {
  const texts = Writing();
  const bornDate = new Date('1994-06-21');
  const currentDate = new Date();
  const differenceDate = currentDate.getTime() - bornDate.getTime();
  const msAge = new Date(differenceDate);
  const yearAge = Math.abs(msAge.getUTCFullYear() - 1970);

  return (
    <>
      <AnchorAbout id='about' />
      <ContainerAbout data-aos='fade-up'>
        <Title>{texts.about.title}</Title>
        <TextCenter>
          <Text style={{ margin: '40px 0px 20px 0px' }}>
            {texts.about.intro}
          </Text>
        </TextCenter>
        <Row>
          <ImgProfile src={profileImg} />
          <ColumnContainer>
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
                      text={String(yearAge)}
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
          </ColumnContainer>
        </Row>
      </ContainerAbout>
      <Skills />
      <Resume />
    </>
  );
};

export default About;
