import { storage } from "@utils";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FC } from "react";

interface Props {
  name: string;
}

const File: FC<Props> = ({ name }) => {
  const [url, setUrl] = useState<string>();

  const { asPath } = useRouter();

  const renderFile = (ext: RegExpMatchArray | null) => {
    console.log(ext);
    const starsRef = ref(
      storage,
      `${asPath.replace("/file-manager", "")}/${name}`
    );

    getDownloadURL(starsRef).then((url) => setUrl(url));

    if (ext && url) {
      switch (ext[0]) {
        case ".jpg":
        case ".png":
        case "jpeg":
          return <Image src={url} alt={name} layout="fill" />;

        case ".docx":
          return <div>Word</div>;

        case ".pdf":
          return <div>PDF</div>;

        default:
          null;
      }
    }
  };

  return (
    <div className="file">
      {renderFile(name.match(/\.[0-9a-z]+$/i))}
      <span className="name">{name}</span>
    </div>
  );
};

export { File };
