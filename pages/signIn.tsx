import { useAuth } from "@/config/context";
import { db } from "@/config/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import React, { useContext } from "react";

type Props = {};
interface user {
  uid: number;
}

const SignIn = (props: Props) => {
  const { setCurrentUser }: any = useAuth();
  const onSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const user: any = auth.currentUser;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setCurrentUser(docSnap.data());
      
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          username: user.displayName.split(" ").join("").toLocaleLowerCase(),
          userImg: `https://api.multiavatar.com/${user.displayName}`,
          uid: user.uid,
          timestamp: serverTimestamp(),
        });
      }
    } catch (error) {}
  };

  return (
    <div>
      SignIn
      <button onClick={() => onSignIn()}>Button</button>
    </div>
  );
};

export default SignIn;
