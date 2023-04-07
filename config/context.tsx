import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useContext, useState, createContext } from "react";
import { app, db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
export const AuthContext = createContext("");

const auth = getAuth(app);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<any | null>();
  const [loading, setLoading] = useState(true);

  function login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password);
  }

  function signOutUser() {
    signOut(auth);
  }

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function getUser() {
    return auth.currentUser;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUser = async () => {
            // @ts-ignore
          const docRef = doc(db, "users", auth.currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
          }
        };
        fetchUser();
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    auth,
    setCurrentUser,
    getUser,
    signUp,
    login,
    signOutUser,
  };
  return (
    // @ts-ignore
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
