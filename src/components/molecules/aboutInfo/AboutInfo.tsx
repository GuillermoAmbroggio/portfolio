import React from 'react';
import Icon from 'atoms/icon/Icon';
import { Text } from 'atoms/text/Text';
import { ContainerAboutInfo } from './aboutinfo.style';

interface IAboutInfoProps {
  title: string;
  text: string;
  style?: React.CSSProperties;
}

const AboutInfo: React.FC<IAboutInfoProps> = ({ title, text, style }) => {
  return (
    <ContainerAboutInfo style={style}>
      <Icon name="fas fa-chevron-right" />
      <Text style={{ fontWeight: 'bold', marginRight: 8 }}>{title}</Text>
      <Text>{text}</Text>
    </ContainerAboutInfo>
  );
};

export default AboutInfo;
