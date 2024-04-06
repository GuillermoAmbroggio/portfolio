import React from 'react';
import ProgressBar from '../../atoms/progressBar/ProgressBar';
import { Title } from '../../atoms/text/Text';
import Writing from '../../../copywriting/Writing';
import { ColumnLeft, ColumnRight } from '../../templates/Layouts.style';
import { ContainerSkills, RowSkills } from './skills.style';

const Skills: React.FC = ({}) => {
  const texts = Writing();

  return (
    <ContainerSkills data-aos='fade-up'>
      <Title>{texts.skills.title}</Title>
      <RowSkills>
        <ColumnLeft
          style={{
            justifyContent: 'space-between',
          }}
        >
          <ProgressBar title='CSS' status='95%' />
          <ProgressBar title='JAVASCRIPT' status='90%' />
          <ProgressBar title='TYPESCRIPT' status='90%' />
          <ProgressBar title='NODE TS' status='85%' />
        </ColumnLeft>
        <ColumnRight style={{ justifyContent: 'space-between' }}>
          <ProgressBar title='HTML' status='95%' />
          <ProgressBar title='REACT' status='95%' />
          <ProgressBar title='REACT NATIVE' status='90%' />
          <ProgressBar title='EXPRESS JS' status='85%' />
        </ColumnRight>
      </RowSkills>
    </ContainerSkills>
  );
};

export default Skills;
