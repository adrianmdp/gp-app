import Link from "next/link";
import { FC } from "react";
import { Trash } from "react-feather";
import { Card } from "@components";

interface Props {
  className?: string;
  splitPath?: string[];
}

const Breadcrumb: FC<Props> = ({ className, splitPath }) => {
  return (
    <Card className={`breadcrumb ${className || ""}`}>
      <ul className="inline unstyled">
        {splitPath?.map((folder, i) => (
          <li key={folder}>
            <Link href={`/file-manager/${splitPath.slice(0, i + 1).join("/")}`}>
              {folder}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export { Breadcrumb };
