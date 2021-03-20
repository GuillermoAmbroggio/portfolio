import React from "react";
import { ContainerProgressBar, Bar } from "./progressbar.style";
import { Row } from "../../../templates/Layouts.style";
import { SmallText } from "../text/Text";

interface IProgressBarProps {
  title: string;
  status: string;
  statusColor?: string;
  backgroundColor?: string;
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  status,
  backgroundColor,
  statusColor,
  title,
}) => {
  return (
    <div>
      <Row style={{ justifyContent: "space-between", padding: "10px 0px" }}>
        <SmallText>{title}</SmallText>
        <SmallText>{status}</SmallText>
      </Row>
      <ContainerProgressBar backgroundColor={backgroundColor}>
        <Bar status={status} statusColor={statusColor} />
      </ContainerProgressBar>
    </div>
  );
};

export default ProgressBar;
