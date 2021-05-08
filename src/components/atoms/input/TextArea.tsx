import React from "react";
import {
  ContainerInput,
  TextArea as RTextArea,
  ContainerMessage,
  TextMessage,
} from "./input.style";

interface IInputProps extends React.ComponentPropsWithoutRef<"textarea"> {
  messagge?: string;
  status?: "success" | "error";
  containerStyle?: React.CSSProperties;
}

const TextArea: React.FC<IInputProps> = ({
  status = undefined,
  messagge,
  containerStyle,
  ...rest
}) => {
  return (
    <ContainerInput style={containerStyle}>
      <RTextArea {...rest} status={status} />
      <ContainerMessage>
        <TextMessage status={status}>{messagge}</TextMessage>
      </ContainerMessage>
    </ContainerInput>
  );
};

export default TextArea;
