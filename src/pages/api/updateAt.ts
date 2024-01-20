import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../firestore";

type ResponseData = {
  updateAt: string;
};

function timestampToDate(timestamp: number): string {
  var date = new Date(timestamp * 1000);
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);

  return `${year}年${month}月${day}日${hours}時`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const docRef = doc(db, "update_times", "update_at");
  const docSnap = await getDoc(docRef);

  // new Date();
  if (docSnap.exists()) {
    res
      .status(200)
      .json({ updateAt: timestampToDate(docSnap.data()["time"]["seconds"]) });
    // console.log("Document data:", docSnap.data()["time"]["seconds"]);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
