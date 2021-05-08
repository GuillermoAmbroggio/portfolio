import React from "react";
import {
  ContainerInput,
  Input as RInput,
  ContainerMessage,
  TextMessage,
} from "./input.style";

interface IInputProps extends React.ComponentPropsWithoutRef<"input"> {
  messagge?: string;
  status?: "success" | "error";
  containerStyle?: React.CSSProperties;
}

const InputX: React.FC<IInputProps> = ({
  status = undefined,
  messagge,
  containerStyle,
  ...rest
}) => {
  return (
    <ContainerInput style={containerStyle}>
      <RInput {...rest} status={status} />
      <ContainerMessage>
        <TextMessage status={status}>{messagge}</TextMessage>
      </ContainerMessage>
    </ContainerInput>
  );
};

export default InputX;
