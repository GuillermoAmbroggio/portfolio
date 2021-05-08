import React from "react";
import {
  ContainerItem,
  ContainerIcon,
  Title,
  Description,
} from "./itemcontact.style";
import Icon from "../../../components/atoms/icon/Icon";
import { Column } from "../../../templates/Layouts.style";

interface IItemContactProps {
  iconName: string;
  title: string;
  description: string;
  containerStyle?: React.CSSProperties;
}

const ItemContact: React.FC<IItemContactProps> = ({
  iconName,
  title,
  description,
  containerStyle,
}) => {
  return (
    <ContainerItem style={containerStyle}>
      <ContainerIcon className="containericon">
        <Icon name={iconName} />
      </ContainerIcon>
      <Column>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Column>
    </ContainerItem>
  );
};

export default ItemContact;
