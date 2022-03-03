import { FC } from "react";
import { Trash2 } from "react-feather";
import { Button } from "..";

interface Props {
  name: string;
  handleOpen: () => void;
  handleRemove: (name: string) => void;
}

const Folder: FC<Props> = ({ name, handleOpen, handleRemove }) => {
  return (
    <div
      className="folder"
      style={{ position: "relative", textAlign: "center" }}
      onDoubleClick={handleOpen}
      onTouchEnd={handleOpen}
    >
      <div className="icon"></div>
      <span>{name}</span>
      <Button
        className="remove"
        color="danger"
        style="rounded"
        handleClick={() => handleRemove(name)}
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
};

export { Folder };
