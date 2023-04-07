import { app, db } from "@/config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export async function getDocInfo(id: any) {
  const ref = doc(db, "auction", id);
  const data = await getDoc(ref);
  console.log(data.data());
}
