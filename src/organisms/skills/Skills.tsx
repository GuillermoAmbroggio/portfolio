import React from "react";
import ProgressBar from "../../components/atoms/progressBar/ProgressBar";
import { Title } from "../../components/atoms/text/Text";
import Writing from "../../copywriting/Writing";
import { ColumnLeft, ColumnRight } from "../../templates/Layouts.style";
import { ContainerSkills, RowSkills } from "./skills.style";

const Skills: React.FC = ({}) => {
  const texts = Writing();

  return (
    <ContainerSkills data-aos="fade-up">
      <Title>{texts.skills.title}</Title>
      <RowSkills>
        <ColumnLeft
          style={{
            justifyContent: "space-between",
          }}
        >
          <ProgressBar title="HTML" status="85%" />
          <ProgressBar title="CSS" status="85%" />
          <ProgressBar title="JAVASCRIPT" status="80%" />
          <ProgressBar title="TYPESCRIPT" status="70%" />
        </ColumnLeft>
        <ColumnRight style={{ justifyContent: "space-between" }}>
          <ProgressBar title="REACT" status="90%" />
          <ProgressBar title="REACT NATIVE" status="90%" />
          <ProgressBar title="NODE JS" status="70%" />
          <ProgressBar title="EXPRESS JS" status="60%" />
        </ColumnRight>
      </RowSkills>
    </ContainerSkills>
  );
};

export default Skills;
