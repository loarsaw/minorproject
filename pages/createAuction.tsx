import React, { useContext } from "react";
import { getAuth } from "firebase/auth";
import {
  getDoc,
  setDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  addDoc,
  writeBatch,
} from "firebase/firestore";
import { AuthContext, useAuth } from "@/config/context";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useState, useRef } from "react";
import { db, storage } from "@/config/firebase";
type Props = {};

const Index = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const batch = writeBatch(db);
  const {
    currentUser,
    auth,
    setCurrentUser,
    getUser,
    signUp,
    login,
    signOutUser,
  }: any = useAuth();

  function handleChange(e: any) {
    if (e.target.files[0]) setFile(e.target.files[0]);
  }
  const arrayData = [
    {
      id: currentUser?.uid,
      name: "One",
      desc: "Anim magna ullamco adipisicing ad ad. Eu nisi proident dolore ad esse consectetur. Occaecat sint anim commodo cillum qui duis fugiat laboris magna excepteur quis magna cillum. Qui sit est incididunt non voluptate dolore tempor. Excepteur amet qui dolor do fugiat aliqua reprehenderit proident do proident magna consectetur sunt elit.",
    },
    {
      id: currentUser?.uid,
      name: "Two",
      desc: "Anim magna ullamco adipisicing ad ad. Eu nisi proident dolore ad esse consectetur. Occaecat sint anim commodo cillum qui duis fugiat laboris magna excepteur quis magna cillum. Qui sit est incididunt non voluptate dolore tempor. Excepteur amet qui dolor do fugiat aliqua reprehenderit proident do proident magna consectetur sunt elit.",
    },
    {
      id: currentUser?.uid,
      name: "Three",
      desc: "Anim magna ullamco adipisicing ad ad. Eu nisi proident dolore ad esse consectetur. Occaecat sint anim commodo cillum qui duis fugiat laboris magna excepteur quis magna cillum. Qui sit est incididunt non voluptate dolore tempor. Excepteur amet qui dolor do fugiat aliqua reprehenderit proident do proident magna consectetur sunt elit.",
    },
    {
      id: currentUser?.uid,
      name: "Four",
      desc: "Anim magna ullamco adipisicing ad ad. Eu nisi proident dolore ad esse consectetur. Occaecat sint anim commodo cillum qui duis fugiat laboris magna excepteur quis magna cillum. Qui sit est incididunt non voluptate dolore tempor. Excepteur amet qui dolor do fugiat aliqua reprehenderit proident do proident magna consectetur sunt elit.",
    },
    {
      id: currentUser?.uid,
      name: "FIve",
      desc: "Anim magna ullamco adipisicing ad ad. Eu nisi proident dolore ad esse consectetur. Occaecat sint anim commodo cillum qui duis fugiat laboris magna excepteur quis magna cillum. Qui sit est incididunt non voluptate dolore tempor. Excepteur amet qui dolor do fugiat aliqua reprehenderit proident do proident magna consectetur sunt elit.",
    },
    {
      id: currentUser?.uid,
      name: "FIve",
      desc: "Anim magna ullamco adipisicing ad ad. Eu nisi proident dolore ad esse consectetur. Occaecat sint anim commodo cillum qui duis fugiat laboris magna excepteur quis magna cillum. Qui sit est incididunt non voluptate dolore tempor. Excepteur amet qui dolor do fugiat aliqua reprehenderit proident do proident magna consectetur sunt elit.",
    },
  ];

  const sendDate = async () => {
    const data = {
      id: currentUser?.uid,
      title: title,
      desc: description,
    };
    const docRef = await addDoc(collection(db, "auction"), data);
    console.log(docRef);
    // const imageRef = ref(storage, `posts/${docRef.id}/image`);
  };
  return (
    <div>
      Create Auction
      <div>Name Of Item</div>
      <input type="text" />
      <div>Description</div>
      <textarea name="" id="" cols={30} rows={10}></textarea>
      <button onClick={() => sendDate()}>Submit</button>
    </div>
  );
};

export default Index;
