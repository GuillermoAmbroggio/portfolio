import React from "react";
import useTheme from "../../../hooks/useTheme";
import "./progressbar.css";

interface IProgressBarProps {
  status: string;
  statusColor?: string;
  backgroundColor?: string;
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  status,
  backgroundColor,
  statusColor,
}) => {
  const theme = useTheme();
  const background_color = backgroundColor
    ? backgroundColor
    : theme.palette.secondary;
  const status_color = statusColor ? statusColor : theme.palette.primary;

  return (
    <div
      className="contProgressBar"
      style={{
        backgroundColor: background_color,
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: status_color,
          width: status,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
