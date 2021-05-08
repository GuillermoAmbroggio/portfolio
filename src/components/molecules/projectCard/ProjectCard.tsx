import React from "react";
import { SubTitle, Text } from "../../atoms/text/Text";
import Icon from "../../atoms/icon/Icon";
import { ContainerIcon, Image, ContainerCard } from "./projectcard.style";
import useImages from "../../../organisms/projectDetail/useImages";
import useStore from "../../../hooks/useStore";

interface IProjectCardProps {
  openModal: () => void;
  title: string;
  format: string;
  id: number;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  openModal,
  title,
  format,
  id,
}) => {
  const images = useImages(id);
  const { modeTheme } = useStore();
  return (
    <ContainerCard modeTheme={modeTheme}>
      <Image src={images[0]} alt="" />
      <div className="portfolio-info">
        <SubTitle>{title}</SubTitle>
        <Text style={{ margin: "10px 0px" }}>{format}</Text>
        <ContainerIcon onClick={openModal}>
          <Icon name="fas fa-plus" />
        </ContainerIcon>
      </div>
    </ContainerCard>
  );
};

export default ProjectCard;
