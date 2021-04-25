import React from "react";
import { LineCard, SubTitle } from "./projectcardmodal.style";
import { BoldText, Text, Link } from "../../atoms/text/Text";
import Writing from "../../../copywriting/Writing";
import { Row } from "../../../templates/Layouts.style";
import { IProjectsDetails } from "../../../organisms/projectDetail/ProjectDetail";
import BoxCard from "../../atoms/boxCard/BoxCard";

interface IProjectCardProps {
  data: IProjectsDetails;
}

const ProjectCardModal: React.FC<IProjectCardProps> = ({ data }) => {
  const texts = Writing();

  return (
    <div>
      <BoxCard>
        <SubTitle>{data.title}</SubTitle>
        <LineCard />
        <Row style={{ marginTop: "10px " }}>
          <BoldText style={{ marginRight: 8 }}>
            {texts.projects.projectsDetails.category}
          </BoldText>
          <Text>{data.category}</Text>
        </Row>
        <Row style={{ marginTop: "10px " }}>
          <BoldText style={{ marginRight: 8 }}>
            {texts.projects.projectsDetails.client}
          </BoldText>
          <Text>{data.client}</Text>
        </Row>

        <Row style={{ marginTop: "10px " }}>
          <BoldText style={{ marginRight: 8 }}>
            {texts.projects.projectsDetails.date}
          </BoldText>
          <Text>{data.date}</Text>
        </Row>

        <Row style={{ marginTop: "10px " }}>
          <BoldText style={{ marginRight: 8 }}>Url: </BoldText>
          <Link href={data.url.url} target="_blank" rel="noopener noreferrer">
            {data.url.title}
          </Link>
        </Row>

        {data.url.title2 ? (
          <Row style={{ marginTop: "10px " }}>
            <BoldText style={{ marginRight: 8 }}>Url: </BoldText>
            <Link
              href={data.url.url2}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.url.title2}
            </Link>
          </Row>
        ) : null}

        <SubTitle style={{ marginTop: 30, marginBottom: 8 }}>
          {data.description.title}:
        </SubTitle>
        <Text>{data.description.content}</Text>
      </BoxCard>
    </div>
  );
};

export default ProjectCardModal;
