import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { CLOUD_PATH } from "../../../constants/api";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = req.query;

  const path = `${CLOUD_PATH}${params.path}`;

  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
  } catch (err) {
    console.error(err);
  }
  res.status(200).json(fs.readdirSync(path));
}
