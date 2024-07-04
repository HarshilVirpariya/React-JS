import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzTbBmpsBd4B8c9qP_Fg2RsmL9397oB8o",
  authDomain: "myapp35-f7410.firebaseapp.com",
  databaseURL: "https://myapp35-f7410-default-rtdb.firebaseio.com",
  projectId: "myapp35-f7410",
  storageBucket: "myapp35-f7410.appspot.com",
  messagingSenderId: "960488734332",
  appId: "1:960488734332:web:27358ff69d6bb280a313f9",
  measurementId: "G-W1HSTLY3YJ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export{database}