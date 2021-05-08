import React from "react";
import { ContainerToast, TextMessage } from "./toast.style";
import Icon from "../../atoms/icon/Icon";

interface IToastProps {
  status: "success" | "error";
  message: string;
}

const Toast: React.FC<IToastProps> = ({ status, message }) => {
  const iconName = status === "success" ? "fa fa-check" : "fa fa-times-circle";

  return (
    <ContainerToast status={status}>
      <Icon name={iconName} />
      <TextMessage status={status}>{message}</TextMessage>
    </ContainerToast>
  );
};

export default Toast;
