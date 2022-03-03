import { fileManagerApi } from "@api";
import { useRouter } from "next/router";
import { useState } from "react";
import { FC, FormEvent } from "react";
import { useMutation, useQueryClient } from "react-query";

const AddFolder: FC = () => {
  const queryClient = useQueryClient();

  const [folderName, setFolderName] = useState("");

  const { asPath } = useRouter();

  const { mutateAsync: makeDirectory } = useMutation(fileManagerApi.mkDir, {
    onSuccess: () => queryClient.invalidateQueries("open-folder"),
  });

  const mkdir = (e: FormEvent) => {
    e.preventDefault();
    makeDirectory({ name: folderName, base: asPath });
  };

  return (
    <form onSubmit={mkdir}>
      <input
        className="control"
        type="text"
        name="folder"
        onChange={(e) => setFolderName(e.target.value)}
      />
      <button type="submit">Crear carpeta</button>
    </form>
  );
};

export { AddFolder };
