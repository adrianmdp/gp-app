import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { CLOUD_PATH } from "../../../constants/api";
import nextConnect from "next-connect";
import middleware from "../../../api/middleware";

import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@utils";

const handler = nextConnect();

handler.use(middleware);

export const config = {
  api: {
    bodyParser: false,
  },
};

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const path = `${CLOUD_PATH}${req.body.base}`;

  var oldPath = req.files.files.filepath;
  var newPath = path + "/" + req.files.files.originalFilename;
  var rawData = fs.readFileSync(oldPath);

  console.log(oldPath, newPath, rawData);

  const mountainsRef = ref(
    storage,
    `${req.body.base}/${req.files.files.originalFilename}`
  );
  uploadBytes(mountainsRef, rawData)
    .then((response) => {
      fs.writeFile(
        path + "/" + req.files.files.originalFilename,
        rawData,
        function (err) {
          if (err) console.log(err);
          return res.send("Successfully uploaded");
        }
      );
    })
    .catch((err) => console.log(err));

  res.status(200).json("ok");
});

export default handler;
