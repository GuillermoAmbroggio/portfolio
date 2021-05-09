import React from "react";
import {
  ContainerFooter,
  TextName,
  SubText,
  ContainerIcons,
  ContainerIcon,
  Corazon,
  ContainerTexts,
  FirstTexts,
} from "./footer.style";
import Icon from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import Writing from "../../../copywriting/Writing";

const Footer: React.FC = () => {
  const texts = Writing();

  return (
    <ContainerFooter>
      <ContainerTexts>
        <FirstTexts>
          <Text>{texts.footer.made}</Text>
          <Corazon>❤ </Corazon>
          <Text>{texts.footer.by}</Text>
        </FirstTexts>
        <TextName> Guillermo Ambroggio </TextName>
      </ContainerTexts>
      <SubText>{texts.footer.text}</SubText>
      <ContainerIcons>
        <a
          href={"https://github.com/GuillermoAmbroggio"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContainerIcon>
            <Icon name="fab fa-github-alt" size={25} />
          </ContainerIcon>
        </a>
        <a
          href={"https://www.linkedin.com/in/guillermoambroggio/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContainerIcon>
            <Icon name="fab fa-linkedin-in" size={25} />
          </ContainerIcon>
        </a>
      </ContainerIcons>
    </ContainerFooter>
  );
};
export default Footer;
