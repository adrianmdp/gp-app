import { FC } from "react";

interface Props {
  className: string;
  type?: "submit" | "reset" | "button";
  color?: "primary" | "secondary" | "default" | "danger";
  style?: "rounded" | "normal";
  handleClick?: () => void;
}

const Button: FC<Props> = ({
  children,
  className,
  color,
  type,
  style,
  handleClick,
}) => {
  return (
    <button
      className={`btn ${className || ""} ${style || ""} ${color || ""}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export { Button };
