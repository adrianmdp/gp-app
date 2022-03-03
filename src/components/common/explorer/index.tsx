import { FC } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Card, File, Folder } from "@components";
import { fileManagerApi } from "../../../api/file-manager";
import { useRouter } from "next/router";

interface Props {
  openFolder?: string[];
}

const Explorer: FC<Props> = ({ openFolder }) => {
  const queryClient = useQueryClient();

  const { asPath, push } = useRouter();

  const { mutateAsync: removeDirectory } = useMutation(fileManagerApi.remove, {
    onSuccess: () => queryClient.invalidateQueries("open-folder"),
  });

  const remove = (name: string) => {
    removeDirectory({ name, base: asPath });
  };

  return (
    <Card className="explorer">
      {openFolder?.length! > 0
        ? openFolder?.map((name) =>
            name.match(/^.*\.[^\\]+$/) ? (
              <File name={name} />
            ) : (
              <Folder
                key={name}
                name={name}
                handleRemove={remove}
                handleOpen={() => push(`${asPath}/${name}`)}
              />
            )
          )
        : "Este directorio se encuentra vacío."}
    </Card>
  );
};

export { Explorer };
