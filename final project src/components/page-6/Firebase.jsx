import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTaduEfdvEs_6829z9O9Zy8KAS8BLxdIE",
  authDomain: "finalproject-ff11e.firebaseapp.com",
  databaseURL: "https://finalproject-ff11e-default-rtdb.firebaseio.com",
  projectId: "finalproject-ff11e",
  storageBucket: "finalproject-ff11e.appspot.com",
  messagingSenderId: "685439141123",
  appId: "1:685439141123:web:4e9bf87d18032ccb5c9536",
  measurementId: "G-5ECPBY4QWG"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export{database}