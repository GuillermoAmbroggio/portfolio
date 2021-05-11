import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProjectCardModal from "../../molecules/projectCardModal/ProjectCardModal";
import {
  ContainerCarrusel,
  Column,
  RowResponsive,
} from "./projectdetail.style";
import useImages from "./useImages";

export interface IProjectsDetails {
  title: string;
  category: string;
  client: string;
  date: string;
  url: {
    title: string;
    title2?: string;
    url: string;
    url2?: string;
  };
  id: number;
  description: { title: string; content: string };
}

interface IProjectDetailProps {
  data: IProjectsDetails;
}

const ProjectDetail: React.FC<IProjectDetailProps> = ({ data }) => {
  const images = useImages(data.id);
  return (
    <RowResponsive style={{ height: "100%" }}>
      <ContainerCarrusel>
        <Carousel autoPlay={false} infiniteLoop={true}>
          {images.length
            ? images.map((ele, i) => (
                <div style={{ maxHeight: "50vh" }} key={i}>
                  <img
                    src={ele}
                    style={{ objectFit: "contain", maxHeight: "50vh" }}
                  />
                </div>
              ))
            : undefined}
        </Carousel>
      </ContainerCarrusel>
      <Column>
        <ProjectCardModal data={data} />
      </Column>
    </RowResponsive>
  );
};

export default ProjectDetail;
