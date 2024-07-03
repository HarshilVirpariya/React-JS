import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA6opL1PPzULE7zRR2hO9C5m_dnrX0keXI",
  authDomain: "fir-storage-i-6748c.firebaseapp.com",
  databaseURL: "https://fir-storage-i-6748c-default-rtdb.firebaseio.com",
  projectId: "fir-storage-i-6748c",
  storageBucket: "fir-storage-i-6748c.appspot.com",
  messagingSenderId: "191628507915",
  appId: "1:191628507915:web:eebf53aecda8b19f7c000e",
  measurementId: "G-133W89EJM1"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export{database}