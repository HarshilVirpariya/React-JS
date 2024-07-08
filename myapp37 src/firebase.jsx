import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCH-4lh5JbzN7zUhRaEVavI2qT3QV7ey-8",
  authDomain: "fir-iv-acab8.firebaseapp.com",
  databaseURL: "https://fir-iv-acab8-default-rtdb.firebaseio.com",
  projectId: "fir-iv-acab8",
  storageBucket: "fir-iv-acab8.appspot.com",
  messagingSenderId: "120470436295",
  appId: "1:120470436295:web:25ea5803b5d72063ba81e2",
  measurementId: "G-GLD8TL822E"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export{database}