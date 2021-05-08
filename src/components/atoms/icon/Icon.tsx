import React from "react";

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

const Icon: React.FC<IIconProps> = ({ name, size, ...rest }) => {
  return (
    <i className={name} {...rest} style={{ fontSize: size ? size : 20 }} />
  );
};

export default Icon;
