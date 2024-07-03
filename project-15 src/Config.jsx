import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2Dqa1hp-RvNo2WTn4JatSvzcsVSuydFY",
  authDomain: "project-15-810d7.firebaseapp.com",
  projectId: "project-15-810d7",
  storageBucket: "project-15-810d7.appspot.com",
  messagingSenderId: "568127764886",
  appId: "1:568127764886:web:a1366b67122b90d90ec5b7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}