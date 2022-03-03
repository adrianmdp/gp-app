import Head from "next/head";
import Modal from "react-responsive-modal";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fileManagerApi } from "@api";
import { Breadcrumb, Button, Explorer, AddFolder, AddFile } from "@components";
import { usePathParser } from "@hooks";
import "react-responsive-modal/styles.css";

const FileSystem: NextPage = () => {
  const [splitPath, setSplitPath] = useState<string[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentSelected, setModalContentSelected] = useState<
    "folder" | "file"
  >("folder");

  const { query } = useRouter();

  const { toString } = usePathParser();

  const { data: openFolder } = useQuery<string[]>(
    ["open-folder", splitPath],
    () => fileManagerApi.readDir(toString(splitPath!)),
    {
      enabled: !!splitPath,
    }
  );

  useEffect(() => {
    setSplitPath(query.path as string[]);
  }, [query.path]);

  return (
    <>
      <Head>
        <title>File Manager</title>
      </Head>

      <main>
        <Breadcrumb className="space-b" splitPath={splitPath} />

        <Explorer
          openFolder={openFolder?.sort((a, b) =>
            a.localeCompare(b, undefined, { sensitivity: "base" })
          )}
        />

        <div className="actions">
          <Button
            className="btn secondary"
            handleClick={() => {
              setIsModalOpen(true);
              setModalContentSelected("folder");
            }}
          >
            Carpeta nueva
          </Button>
          <Button
            className="btn secondary"
            handleClick={() => {
              setIsModalOpen(true);
              setModalContentSelected("file");
            }}
          >
            Agregar archivo
          </Button>
        </div>
      </main>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContentSelected === "folder" ? <AddFolder /> : <AddFile />}
      </Modal>
    </>
  );
};

export default FileSystem;
