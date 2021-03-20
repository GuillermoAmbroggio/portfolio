import React from "react";
import { ContainerResume, Date } from "./resume.style";
import {
  Title,
  SubTitle,
  BoldText,
  Text,
  SmallText,
} from "../../components/atoms/text/Text";
import Writing from "../../copywriting/Writing";
import { Row, ColumnLeft, ColumnRight } from "../../templates/Layouts.style";
import ColumnResume from "../../components/molecules/columnResume/ColumnResume";
import useTheme from "../../hooks/useTheme";

const Resume: React.FC = () => {
  const texts = Writing();
  const theme = useTheme();

  return (
    <ContainerResume data-aos="fade-up">
      <Title>{texts.resume.title}</Title>
      <Row style={{ marginTop: "20px" }}>
        <ColumnLeft>
          <SubTitle style={{ marginBottom: "15px" }}>
            {texts.resume.education.title}
          </SubTitle>
          <ColumnResume>
            <BoldText style={{ color: theme.palette.primary }}>
              {texts.resume.education[1].title}
            </BoldText>
            <Date>
              <SmallText>{texts.resume.education[1].period}</SmallText>
            </Date>
            <Text style={{ fontStyle: "oblique", marginBottom: "15px" }}>
              {texts.resume.education[1].institution}
            </Text>
            <Text style={{ paddingBottom: "15px" }}>
              • {texts.resume.education[1].description}
            </Text>
          </ColumnResume>
          <ColumnResume>
            <BoldText style={{ color: theme.palette.primary }}>
              {texts.resume.education[2].title}
            </BoldText>
            <Date>
              <SmallText>{texts.resume.education[2].period}</SmallText>
            </Date>
            <Text style={{ fontStyle: "oblique", marginBottom: "15px" }}>
              {texts.resume.education[2].institution}
            </Text>
          </ColumnResume>
        </ColumnLeft>
        <ColumnRight>
          <SubTitle style={{ marginBottom: "15px" }}>
            {texts.resume.professionalExperiencie.title}
          </SubTitle>
          <ColumnResume>
            <BoldText style={{ color: theme.palette.primary }}>
              {texts.resume.professionalExperiencie[1].title}
            </BoldText>
            <Date>
              <SmallText>
                {texts.resume.professionalExperiencie[1].period}
              </SmallText>
            </Date>
            <Text style={{ fontStyle: "oblique", marginBottom: "15px" }}>
              {texts.resume.professionalExperiencie[1].institution}
            </Text>
            <Text style={{ paddingBottom: "15px" }}>
              • {texts.resume.professionalExperiencie[1].description}
            </Text>
          </ColumnResume>
          <ColumnResume>
            <BoldText style={{ color: theme.palette.primary }}>
              {texts.resume.professionalExperiencie[2].title}
            </BoldText>
            <Date>
              <SmallText>
                {texts.resume.professionalExperiencie[2].period}
              </SmallText>
            </Date>
            <Text style={{ fontStyle: "oblique", marginBottom: "15px" }}>
              {texts.resume.professionalExperiencie[2].institution}
            </Text>
            <Text>
              • {texts.resume.professionalExperiencie[2].description1}
            </Text>
            <Text>
              • {texts.resume.professionalExperiencie[2].deescription2}
            </Text>
          </ColumnResume>
        </ColumnRight>
      </Row>
    </ContainerResume>
  );
};

export default Resume;
