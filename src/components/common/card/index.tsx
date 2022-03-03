import { FC } from "react";

interface Props {
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return <div className={`card ${className || ""}`}>{children}</div>;
};

export { Card };
