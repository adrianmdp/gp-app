import { api } from "../utils";

const readDir = async (folderPath: string) => {
  const response = await api.get("/file-manager/read", {
    params: { path: folderPath },
  });
  return response.data;
};

const mkDir = async ({ name, base }: { name: string; base: string }) => {
  const response = await api.post("/file-manager/mkdir", {
    base: base.replace("/file-manager", ""),
    name: name,
  });
  return response.data;
};

const uploadFile = async ({
  files,
  base,
}: {
  files: FileList;
  base: string;
}) => {
  var formData = new FormData();
  formData.append("files", files[0]);
  formData.append("base", base.replace("/file-manager", ""));

  const response = await api.post("file-manager/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const remove = async ({ name, base }: { name: string; base: string }) => {
  const response = await api.delete("/file-manager/delete", {
    params: {
      base: base.replace("/file-manager", ""),
      name: name,
    },
  });
  return response.data;
};

export const fileManagerApi = { readDir, mkDir, uploadFile, remove };
