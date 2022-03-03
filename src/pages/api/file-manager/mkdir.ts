import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { CLOUD_PATH } from "../../../constants/api";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const params = req.body;

    const path = `${CLOUD_PATH}${params.base}/${params.name}`;
    console.log(params);

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
  } catch (err) {
    console.error(err);
  }

  return res.status(200).json("OK");
}
