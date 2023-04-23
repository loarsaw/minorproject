import { app, db } from "@/config/firebase";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

export async function getDocInfo(id: any) {
  console.log(id);
  const ref = doc(db, "auction", id);
  const dataSnap = await getDoc(ref);
  if (dataSnap.exists()) {
    const dataValue = dataSnap.data();
    return dataValue;
  }
}

export async function addToAuction({ id, data }: any) {
  const ref = doc(db, "auction", id);
  await updateDoc(ref, {
    price: data.price,
    winnerName: data.name,
  });
}
