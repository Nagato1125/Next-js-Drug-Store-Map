import type { NextApiRequest, NextApiResponse } from "next";
import { getBytes, ref } from "firebase/storage";
import storage from "../../../firebase";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const pathReference = ref(storage, "stores/stores.json");

    const bytes = await getBytes(pathReference);

    const data = new TextDecoder().decode(bytes);
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ message: "Error downloading store data." });
  }
}
