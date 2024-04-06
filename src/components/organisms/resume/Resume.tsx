import React from 'react';
import { ContainerResume, Date } from './resume.style';
import {
  Title,
  SubTitle,
  BoldText,
  Text,
  SmallText,
} from '../../atoms/text/Text';
import Writing from '../../../copywriting/Writing';
import {
  RowResponsive,
  ColumnLeft,
  ColumnRight,
} from '../../templates/Layouts.style';
import ColumnResume from '../../molecules/columnResume/ColumnResume';
import useTheme from '../../../hooks/useTheme';

const Resume: React.FC = () => {
  const texts = Writing();
  const theme = useTheme();

  return (
    <ContainerResume data-aos='fade-up'>
      <Title>{texts.resume.title}</Title>
      <RowResponsive style={{ marginTop: '40px' }}>
        <ColumnLeft>
          <SubTitle style={{ marginBottom: '15px' }}>
            {texts.resume.education.title}
          </SubTitle>
          <ColumnResume>
            <BoldText style={{ color: theme.palette.primary }}>
              {texts.resume.education[1].title}
            </BoldText>
            <Date>
              <SmallText>{texts.resume.education[1].period}</SmallText>
            </Date>
            <Text style={{ fontStyle: 'oblique', marginBottom: '15px' }}>
              {texts.resume.education[1].institution}
            </Text>
            <Text style={{ paddingBottom: '15px' }}>
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
            <Text style={{ fontStyle: 'oblique', marginBottom: '15px' }}>
              {texts.resume.education[2].institution}
            </Text>
          </ColumnResume>
        </ColumnLeft>

        {/* TRABAJAOS */}
        <ColumnRight>
          <SubTitle style={{ marginBottom: '15px' }}>
            {texts.resume.professionalExperiencie.title}
          </SubTitle>

          {/* BLUE ALBA */}
          <ColumnResume>
            <BoldText style={{ color: theme.palette.primary }}>
              {texts.resume.professionalExperiencie[1].title}
            </BoldText>
            <Date>
              <SmallText>
                {texts.resume.professionalExperiencie[1].period}
              </SmallText>
            </Date>
            <Text style={{ fontStyle: 'oblique', marginBottom: '15px' }}>
              {texts.resume.professionalExperiencie[1].institution}
            </Text>
            <Text style={{ paddingBottom: '15px' }}>
              • {texts.resume.professionalExperiencie[1].description}
            </Text>
          </ColumnResume>

          {/* VITAU */}
          <ColumnResume>
            <BoldText style={{ color: theme.palette.primary }}>
              {texts.resume.professionalExperiencie[2].title}
            </BoldText>
            <Date>
              <SmallText>
                {texts.resume.professionalExperiencie[2].period}
              </SmallText>
            </Date>
            <Text style={{ fontStyle: 'oblique', marginBottom: '15px' }}>
              {texts.resume.professionalExperiencie[2].institution}
            </Text>
          </ColumnResume>

          {/* VIALIDAD */}
          <ColumnResume>
            <BoldText style={{ color: theme.palette.primary }}>
              {texts.resume.professionalExperiencie[3].title}
            </BoldText>
            <Date>
              <SmallText>
                {texts.resume.professionalExperiencie[3].period}
              </SmallText>
            </Date>
            <Text style={{ fontStyle: 'oblique', marginBottom: '15px' }}>
              {texts.resume.professionalExperiencie[3].institution}
            </Text>
            <Text>
              • {texts.resume.professionalExperiencie[3].description1}
            </Text>
          </ColumnResume>
        </ColumnRight>
      </RowResponsive>
    </ContainerResume>
  );
};

export default Resume;
