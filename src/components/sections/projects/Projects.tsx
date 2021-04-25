import React, { useState } from "react";
import {
  AnchorProjects,
  ContainerProjects,
  ContainerCards,
} from "./projects.style";
import { Title } from "../../atoms/text/Text";
import Writing from "../../../copywriting/Writing";
import ProjectDetail, {
  IProjectsDetails,
} from "../../../organisms/projectDetail/ProjectDetail";
import Modal from "../../../organisms/modal/Modal";
import ProjectCard from "../../molecules/projectCard/ProjectCard";

const Projects: React.FC = () => {
  const texts = Writing();
  const [showModal, setShowModal] = useState(false);
  const [datesModal, setDatesModal] = useState<IProjectsDetails>(
    texts.projects.Myprojects[0]
  );

  const body = document.body;

  const closeModal = () => {
    body.classList.remove("stop-scrolling");
    setShowModal(false);
  };

  return (
    <>
      <AnchorProjects id="projects" />
      <ContainerProjects data-aos="fade-up">
        <Title>{texts.projects.title}</Title>
        <ContainerCards>
          {texts.projects.Myprojects.map((e, i) => {
            return (
              <ProjectCard
                key={i}
                openModal={() => {
                  setDatesModal(e);
                  body.classList.add("stop-scrolling");
                  setShowModal(true);
                }}
                title={e.title}
                format={e.category}
                id={e.id}
              />
            );
          })}
        </ContainerCards>
        <Modal open={showModal} close={closeModal}>
          <ProjectDetail data={datesModal} />
        </Modal>
      </ContainerProjects>
    </>
  );
};

export default Projects;
