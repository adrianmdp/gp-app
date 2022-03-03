import type { NextApiRequest, NextApiResponse } from "next";
import fs, { promises as fsPromises } from "fs";
import { CLOUD_PATH } from "../../../constants/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = req.query;

  const path = `${CLOUD_PATH}/${params.base}/${params.name}`;

  const stat = await fsPromises.lstat(path);

  if (stat.isFile()) {
    res.status(200).json(fs.unlinkSync(path));
  } else {
    fs.rmdir(path, function () {
      res.status(200).json("ok");
    });
  }
}
