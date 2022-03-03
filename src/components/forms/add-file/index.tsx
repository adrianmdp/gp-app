import { fileManagerApi } from "@api";
import { useRouter } from "next/router";
import { FC, FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const AddFile: FC = () => {
  const queryClient = useQueryClient();

  const [fileName, setFileName] = useState<FileList>();

  const { asPath } = useRouter();

  const { mutateAsync: uploadFiles } = useMutation(fileManagerApi.uploadFile, {
    onSuccess: () => queryClient.invalidateQueries("open-folder"),
  });

  const upload = (e: FormEvent) => {
    e.preventDefault();
    uploadFiles({ files: fileName!, base: asPath });
  };
  return (
    <form onSubmit={upload}>
      <input
        className="control"
        type="file"
        name="file"
        onChange={(e) => setFileName(e.target.files!)}
      />
      <button type="submit">Cargar archivo</button>
    </form>
  );
};

export { AddFile };
