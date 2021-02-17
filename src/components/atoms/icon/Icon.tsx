import React from "react";
import useTheme from "../../../hooks/useTheme";
//extends Omit<ButtonProps, 'type' | 'icon'>
interface IIconProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    "className" | "style"
  > {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  name: string;
}

const Icon: React.FC<IIconProps> = ({
  size = 24,
  name,
  color,
  style,
  ...rest
}) => {
  const theme = useTheme();
  const colorUse = color ? color : theme.palette.texts.title;

  return (
    <i
      className={name}
      style={{ color: colorUse, fontSize: size, ...style }}
      {...rest}
    />
  );
};

export default Icon;
