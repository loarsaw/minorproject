// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK1mtMgBt0Cqi6s3F2-mGvl9DjpN8Zaw8",
  authDomain: "chat-app-846c5.firebaseapp.com",
  projectId: "chat-app-846c5",
  storageBucket: "chat-app-846c5.appspot.com",
  messagingSenderId: "558553190424",
  appId: "1:558553190424:web:49752c5f1ab680515a736d",
  measurementId: "G-Z8YCKPWXN5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();
export { app, db, storage, auth };
