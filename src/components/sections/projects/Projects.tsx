import React from "react";
import { AnchorProjects, ContainerProjects } from "./projects.style";
import { Title } from "../../atoms/text/Text";
import Writing from "../../../copywriting/Writing";

const Projects: React.FC = () => {
  const texts = Writing();

  return (
    <>
      <AnchorProjects id="projects" />
      <ContainerProjects data-aos="fade-up">
        <Title>{texts.projects.title}</Title>
      </ContainerProjects>
    </>
  );
};

export default Projects;
